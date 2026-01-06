import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const publicDir = path.join(__dirname, 'public');
const imagesDir = path.join(publicDir, 'images');
const rawDir = path.join(__dirname, 'raw-images'); // Raw images at project root (not in public)
const optimizedDir = path.join(imagesDir, 'optimized');
const imagesJsonPath = path.join(publicDir, 'images.json');
const manifestJsonPath = path.join(imagesDir, 'manifest.json');

async function optimizeImages() {
  console.log('🚀 Starting image optimization...');
  
  try {
    // Read images configuration
    const imagesConfig = JSON.parse(fs.readFileSync(imagesJsonPath, 'utf-8'));
    const albums = imagesConfig.albums;
    
    if (!albums) {
      console.error('❌ ERROR: No albums found in images.json. Expected structure: {"albums": {"albumName": [...]}}');
      process.exit(1);
    }
    
    // Calculate total images across all albums
    const totalImages = Object.values(albums).reduce((sum, album) => sum + album.length, 0);
    console.log(`📸 Found ${Object.keys(albums).length} albums with ${totalImages} total images to process`);
    
    // Ensure optimized directory exists
    if (!fs.existsSync(optimizedDir)) {
      fs.mkdirSync(optimizedDir, { recursive: true });
    }
    
    const manifest = {
      generated: new Date().toISOString(),
      albums: {}
    };
    
    let totalSuccessCount = 0;
    let totalErrorCount = 0;
    
    // Process each album
    for (const [albumSlug, images] of Object.entries(albums)) {
      console.log(`\n🎨 Processing album: ${albumSlug}`);
      console.log(`   Found ${images.length} images in this album`);
      
      // Ensure album-specific optimized directory exists
      const albumOptimizedDir = path.join(optimizedDir, albumSlug);
      if (!fs.existsSync(albumOptimizedDir)) {
        fs.mkdirSync(albumOptimizedDir, { recursive: true });
      }
      
      manifest.albums[albumSlug] = {};
      let successCount = 0;
      let errorCount = 0;
      
      // Process each image in this album
      for (const imageData of images) {
        const { filename } = imageData;
        const rawPath = path.join(rawDir, albumSlug, filename); // Raw images organized by album
        const optimizedFilename = filename.replace(/\.(jpe?g|png|tiff?)$/i, '.webp');
        const optimizedPath = path.join(albumOptimizedDir, optimizedFilename);
        
        console.log(`\n📷 Processing: ${filename}`);
        
        // Check if raw file exists
        if (!fs.existsSync(rawPath)) {
          console.error(`❌ ERROR: Raw file not found: ${filename}`);
          console.error(`   Expected at: ${rawPath}`);
          console.error(`   Please place the original JPEG file in the raw directory.`);
          process.exit(1);
        }
        
        try {
          // Get original image metadata with orientation correction
          const metadata = await sharp(rawPath).metadata();
          let { width, height } = metadata;
          
          // Handle EXIF orientation (rotated images)
          if (metadata.orientation && metadata.orientation >= 5 && metadata.orientation <= 8) {
            // Swap dimensions for rotated images
            [width, height] = [height, width];
          }
          
          // Calculate new dimensions (max 1920px for the longer side, maintain aspect ratio)
          let newWidth = width;
          let newHeight = height;
          
          const isLandscape = width >= height;
          const maxDimension = 1920;
          
          if ((isLandscape && width > maxDimension) || (!isLandscape && height > maxDimension)) {
            if (isLandscape) {
              // Landscape: width is the longer side
              const ratio = maxDimension / width;
              newWidth = maxDimension;
              newHeight = Math.round(height * ratio);
            } else {
              // Portrait: height is the longer side
              const ratio = maxDimension / height;
              newHeight = maxDimension;
              newWidth = Math.round(width * ratio);
              console.log(`   Portrait resize ratio: ${ratio.toFixed(4)}, newWidth: ${newWidth}, newHeight: ${newHeight}`);
            }
          }
          
          console.log(`   Original: ${width}x${height}px (${isLandscape ? 'landscape' : 'portrait'})`);
          console.log(`   Optimized: ${newWidth}x${newHeight}px`);
          
          // Process the image - rotate() FIRST to apply EXIF orientation before resize
          const image = sharp(rawPath)
            .rotate(); // Auto-rotate based on EXIF orientation
          
          // Resize if necessary
          if ((isLandscape && width > maxDimension) || (!isLandscape && height > maxDimension)) {
            image.resize(newWidth, newHeight, { fit: 'inside', withoutEnlargement: true });
          }
          
          // Convert to WebP with improved quality for modal viewing
          await image
            .webp({ 
              quality: 85, 
              effort: 6,
              smartSubsample: true
            })
            .toFile(optimizedPath);
          
          // Generate blur placeholder (20px for shorter dimension)
          let blurResize = {};
          if (isLandscape) {
            // Landscape: base width on 20px, maintain aspect ratio
            blurResize = {
              width: 20,
              height: null,
              fit: 'inside',
              withoutEnlargement: true
            };
          } else {
            // Portrait: base height on 20px, maintain aspect ratio
            blurResize = {
              width: null,
              height: 20,
              fit: 'inside',
              withoutEnlargement: true
            };
          }
          
          const blurBuffer = await sharp(rawPath)
            .rotate() // Auto-rotate based on EXIF orientation
            .resize(blurResize)
            .webp({ 
              quality: 50,
              effort: 6
            })
            .toBuffer();
          
          const blurDataURL = `data:image/webp;base64,${blurBuffer.toString('base64')}`;
          
          // Calculate blur dimensions
          const blurMetadata = await sharp(blurBuffer).metadata();
          const blurWidth = blurMetadata.width;
          const blurHeight = blurMetadata.height;
          
          // Add to manifest for this album
          manifest.albums[albumSlug][filename] = {
            src: `/images/optimized/${albumSlug}/${optimizedFilename}`,
            width: newWidth,
            height: newHeight,
            blurDataURL,
            blurWidth,
            blurHeight
          };
          
          const originalSize = fs.statSync(rawPath).size;
          const optimizedSize = fs.statSync(optimizedPath).size;
          const compressionRatio = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
          
          console.log(`   ✅ Optimized successfully`);
          console.log(`   📊 Size: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${compressionRatio}% reduction)`);
          console.log(`   🎨 Blur: ${blurWidth}x${blurHeight}px placeholder generated`);
          
          successCount++;
          
        } catch (error) {
          console.error(`   ❌ ERROR processing ${filename}:`, error.message);
          errorCount++;
        }
      }
      
      console.log(`\n📊 Album ${albumSlug} summary:`);
      console.log(`   ✅ Successfully processed: ${successCount}/${images.length} images`);
      if (errorCount > 0) {
        console.log(`   ❌ Errors encountered: ${errorCount} images`);
      }
      
      totalSuccessCount += successCount;
      totalErrorCount += errorCount;
    }
    
    // Write manifest
    fs.writeFileSync(manifestJsonPath, JSON.stringify(manifest, null, 2));
    
    console.log(`\n🎉 Complete optimization summary:`);
    console.log(`✅ Successfully processed: ${totalSuccessCount}/${totalImages} images`);
    if (totalErrorCount > 0) {
      console.log(`❌ Total errors encountered: ${totalErrorCount} images`);
    }
    console.log(`📄 Manifest written to: ${manifestJsonPath}`);
    console.log(`🎯 Album structure created in: ${optimizedDir}`);
    
  } catch (error) {
    console.error('💥 Fatal error during optimization:', error);
    process.exit(1);
  }
}

// Run the optimization
optimizeImages().catch(console.error);