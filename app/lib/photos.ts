import fs from "fs";
import path from "path";
import sizeOf from "image-size";

export type Photo = {
  src: string;
  alt: string;
  date: string;
  location?: string;
  width: number;
  height: number;
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
  
  try {
    const entries = await fs.promises.readdir(publicDir, { withFileTypes: true });
    const albums: Album[] = [];
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
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

// Get photos for a specific album
export async function getPhotos(albumSlug: string): Promise<Photo[]> {
  const publicDir = path.join(process.cwd(), "public");
  const albumDir = path.join(publicDir, albumSlug);
  
  // Try to load photo metadata from JSON file
  let photoMetadata: Array<{ file: string; date: string; location?: string; category: string; width?: number; height?: number }> = [];
  try {
    const metadataPath = path.join(process.cwd(), "app/lib/photo-data.json");
    const metadataContent = await fs.promises.readFile(metadataPath, "utf-8");
    photoMetadata = JSON.parse(metadataContent);
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
          let dimensions = { width: 0, height: 0 };

          // Use pre-calculated dimensions if available
          if (metadata?.width && metadata?.height) {
            dimensions = { width: metadata.width, height: metadata.height };
          } else {
            // Fallback to reading the file only if dimensions are missing
            try {
              const buffer = await fs.promises.readFile(filePath);
              const size = sizeOf(buffer);
              if (size && size.width && size.height) {
                dimensions = { width: size.width, height: size.height };
                // Swap dimensions for rotated images (Orientation 5-8)
                if (size.orientation && size.orientation >= 5 && size.orientation <= 8) {
                  dimensions = { width: size.height, height: size.width };
                }
              }
            } catch (e) {
              console.error(`Error getting dimensions for ${file}:`, e);
            }
          }

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
            timestamp,
            ...dimensions,
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
      .map(({ src, alt, date, location, width, height }) => ({ 
        src, 
        alt, 
        date: date || "", 
        location, 
        width, 
        height 
      }));
      
  } catch (error) {
    console.error("Error reading photos:", error);
    return [];
  }
}
