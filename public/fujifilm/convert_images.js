const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const files = [
  'DSCF5338.JPG',
  'DSCF5397.JPG',
  'DSCF5638.JPG',
  'DSCF5655.JPG',
  'DSCF5718.JPG',
  'DSCF5720.JPG',
  'DSCF5982.JPG'
];

const inputDir = '/Users/dean/Coding/portfolio/public/fujifilm';
const results = [];

async function convert() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputFileName = file.replace('.JPG', '.webp');
    const outputPath = path.join(inputDir, outputFileName);

    console.log(`Processing ${file}...`);
    
    // Rotate auto-handles orientation from EXIF
    const image = sharp(inputPath).rotate();
    
    await image
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    const meta = await sharp(outputPath).metadata();
    
    results.push({
      oldFile: file,
      newFile: outputFileName,
      width: meta.width,
      height: meta.height
    });
    
    // Remove original JPG
    fs.unlinkSync(inputPath);
    console.log(`Converted ${file} to ${outputFileName} (${meta.width}x${meta.height}) and removed original.`);
  }
  
  console.log('\nFinal Results for photo-data.json:');
  console.log(JSON.stringify(results, null, 2));
}

convert().catch(console.error);
