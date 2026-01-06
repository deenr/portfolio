import fs from "fs";
import path from "path";

export type Photo = {
  src: string;
  alt: string;
  date: string;
  location?: string;
  width: number;
  height: number;
  description?: string;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

export type Album = {
  slug: string;
  name: string;
  coverImage?: string;
  photoCount: number;
};

// Get all album directories from public folder
export async function getAlbums(): Promise<Album[]> {
  const publicDir = path.join(process.cwd(), "public");
  
  // Check if we have the new images system
  const imagesJsonPath = path.join(publicDir, "images.json");
  if (fs.existsSync(imagesJsonPath)) {
    // New system: return albums from images.json
    try {
      const imagesConfig = JSON.parse(fs.readFileSync(imagesJsonPath, "utf-8"));
      const albums = imagesConfig.albums;
      
      if (!albums) {
        console.error("No albums found in images.json");
        return [];
      }
      
      // Try to load optimization manifest for cover images
      const manifestPath = path.join(publicDir, "images", "manifest.json");
      let manifest: any = null;
      if (fs.existsSync(manifestPath)) {
        manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
      }
      
      return Object.entries(albums).map(([albumSlug, albumImages]) => {
        const images = albumImages as any[];
        
        // Get first image for cover, or use placeholder
        let coverImage = "/images/optimized/placeholder.webp";
        
        if (images.length > 0) {
          const firstImage = images[0];
          const filename = firstImage.filename;
          const optimizedFilename = filename.replace(/\.(jpe?g|png|tiff?)$/i, '.webp');
          
          // Use manifest if available, otherwise use predictable path
          if (manifest && manifest.albums && manifest.albums[albumSlug] && manifest.albums[albumSlug][filename]) {
            coverImage = manifest.albums[albumSlug][filename].src;
          } else {
            coverImage = `/images/optimized/${albumSlug}/${optimizedFilename}`;
          }
        }
        
        return {
          slug: albumSlug,
          name: albumSlug.charAt(0).toUpperCase() + albumSlug.slice(1), // Capitalize first letter
          coverImage,
          photoCount: images.length,
        };
      });
    } catch (error) {
      console.error("Error reading images.json:", error);
      return [];
    }
  }
  
  // Fallback to old system (scan directories)
  try {
    const entries = await fs.promises.readdir(publicDir, { withFileTypes: true });
    const albums: Album[] = [];
    
    for (const entry of entries) {
      if (entry.isDirectory() && entry.name !== "images") {
        const albumPath = path.join(publicDir, entry.name);
        const files = await fs.promises.readdir(albumPath);
        const imageFiles = files.filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f));
        
        if (imageFiles.length > 0) {
          albums.push({
            slug: entry.name,
            name: entry.name,
            coverImage: `/${entry.name}/${imageFiles[0]}`,
            photoCount: imageFiles.length,
          });
        }
      }
    }
    
    return albums;
  } catch (error) {
    console.error("Error reading albums:", error);
    return [];
  }
}

// Get photos using the new optimization system
export async function getPhotos(albumSlug: string): Promise<Photo[]> {
  const publicDir = path.join(process.cwd(), "public");
  const imagesJsonPath = path.join(publicDir, "images.json");
  const manifestPath = path.join(publicDir, "images", "manifest.json");
  
  // If we're using the new system
  if (fs.existsSync(imagesJsonPath)) {
    try {
      const imagesConfig = JSON.parse(fs.readFileSync(imagesJsonPath, "utf-8"));
      const albums = imagesConfig.albums;
      
      if (!albums || !albums[albumSlug]) {
        console.error(`Album "${albumSlug}" not found in images.json`);
        return [];
      }
      
      const albumImages = albums[albumSlug] as any[];
      
      // Try to load optimization manifest
      let manifest: any = null;
      if (fs.existsSync(manifestPath)) {
        manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
      }
      
      const photos = albumImages.map((imageData: any) => {
        const { filename, date, title, description, location } = imageData;
        const optimizedFilename = filename.replace(/\.(jpe?g|png|tiff?)$/i, '.webp');
        
        // Default values (fallback)
        let photo: Photo = {
          src: `/images/optimized/${albumSlug}/${optimizedFilename}`,
          alt: title || filename,
          date: date || "",
          location: location || title || "",
          description: description || "",
          width: 1920, // Default width
          height: 1280, // Default height
        };
        
        // If we have optimization data for this album, use it
        if (manifest && manifest.albums && manifest.albums[albumSlug] && manifest.albums[albumSlug][filename]) {
          const optimizedData = manifest.albums[albumSlug][filename];
          photo = {
            ...photo,
            src: optimizedData.src,
            width: optimizedData.width,
            height: optimizedData.height,
            blurDataURL: optimizedData.blurDataURL,
            blurWidth: optimizedData.blurWidth,
            blurHeight: optimizedData.blurHeight,
          };
        }
        
        return photo;
      });
      
      // Sort by date (newest first)
      return photos.sort((a: Photo, b: Photo) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
      
    } catch (error) {
      console.error("Error reading photos from new system:", error);
      return [];
    }
  }
  
  // Fallback to old system (for backward compatibility)
  const albumDir = path.join(publicDir, albumSlug);
  
  // Try to load photo metadata from JSON file
  let photoMetadata: Array<{ file: string; date: string; location?: string; category: string; width?: number; height?: number; description?: string }> = [];
  try {
    const metadataPath = path.join(process.cwd(), "app/lib/photo-data.json");
    if (fs.existsSync(metadataPath)) {
      const metadataContent = await fs.promises.readFile(metadataPath, "utf-8");
      photoMetadata = JSON.parse(metadataContent);
    }
  } catch {
    // No metadata file, will use file stats instead
  }
  
  // Create a lookup map for quick access
  const metadataMap = new Map(
    photoMetadata
      .filter((p) => p.category === albumSlug)
      .map((p) => [p.file, p])
  );
  
  try {
    const files = await fs.promises.readdir(albumDir);
    const imageFiles = files.filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f));
    
    const photos = await Promise.all(
      imageFiles.map(async (file): Promise<(Photo & { timestamp: number }) | null> => {
        const filePath = path.join(albumDir, file);
        const metadata = metadataMap.get(file);
        
        try {
          const stats = await fs.promises.stat(filePath);

          // Use metadata date or file stats
          let timestamp = stats.mtime.getTime();
          let dateStr = new Date(stats.mtime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });
          
          if (metadata?.date) {
            dateStr = metadata.date;
            // Parse the date for sorting
            const parsedDate = new Date(metadata.date);
            if (!isNaN(parsedDate.getTime())) {
              timestamp = parsedDate.getTime();
            }
          }

          return {
            src: `/${albumSlug}/${file}`,
            alt: file,
            date: dateStr,
            location: metadata?.location,
            description: metadata?.description,
            timestamp,
            width: metadata?.width || 1920,
            height: metadata?.height || 1080,
          };
        } catch (err) {
          console.warn(`Photo not found: ${filePath}`);
          return null;
        }
      })
    );

    // Filter out missing photos and sort by date descending
    const validPhotos = photos.filter((p): p is Photo & { timestamp: number } => p !== null);

    return validPhotos
      .sort((a, b) => b.timestamp - a.timestamp)
      .map(({ src, alt, date, location, width, height, description }) => ({ 
        src, 
        alt, 
        date: date || "", 
        location, 
        width, 
        height,
        description
      }));
      
  } catch (error) {
    console.error("Error reading photos:", error);
    return [];
  }
}
