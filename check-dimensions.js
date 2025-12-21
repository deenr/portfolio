const fs = require('fs');
const path = require('path');
const { imageSize } = require('image-size');
const sizeOf = imageSize;

const publicDir = path.join(process.cwd(), 'public');

async function checkPhotos() {
  try {
    const files = await fs.promises.readdir(publicDir);
    const photos = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

    for (const file of photos) {
      const filePath = path.join(publicDir, file);
      const buffer = await fs.promises.readFile(filePath);
      const dimensions = sizeOf(buffer);
      console.log(`${file}: width=${dimensions.width}, height=${dimensions.height}, orientation=${dimensions.orientation}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

checkPhotos();
