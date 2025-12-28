import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const publicDir = 'client/public';

// Find all image files
const files = await readdir(publicDir);
const imageFiles = files.filter(f => 
  /\.(png|jpg|jpeg|gif)$/i.test(f) && !f.includes('_original')
);

console.log(`Found ${imageFiles.length} images to convert:\n`);

for (const file of imageFiles) {
  const inputPath = join(publicDir, file);
  const outputPath = inputPath.replace(/\.(png|jpg|jpeg|gif)$/i, '.webp');
  
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    console.log(`✓ ${file} → ${outputPath.split('/').pop()}`);
  } catch (error) {
    console.error(`✗ Failed to convert ${file}:`, error.message);
  }
}

console.log('\n✅ Conversion complete!');
