// Script to rename gallery images to victoriaparknails-XXXX format
const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(__dirname, 'public', 'images', 'gallery');
const TARGET_PREFIX = 'victoriaparknails-';
const START_INDEX = 1; // Always start from 1
const PADDING = 4;

// List all files in the gallery directory
console.log('Reading gallery directory...');
fs.readdir(GALLERY_DIR, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    process.exit(1);
  }

  // Filter out non-image files
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp';
  });

  console.log(`Found ${imageFiles.length} image files.`);

  // Store original name mapping for reference
  const originalNames = {};
  
  // Temporarily rename all files to avoid name conflicts during renaming
  const tempPrefix = 'temp_';
  imageFiles.forEach((file, index) => {
    const oldPath = path.join(GALLERY_DIR, file);
    const tempPath = path.join(GALLERY_DIR, `${tempPrefix}${index}${path.extname(file)}`);
    
    try {
      fs.renameSync(oldPath, tempPath);
      originalNames[`${tempPrefix}${index}${path.extname(file)}`] = file;
    } catch (error) {
      console.error(`× Error creating temporary name for ${file}: ${error.message}`);
    }
  });

  // Now rename all files with the sequential naming scheme
  let nextIndex = START_INDEX;
  
  // Get the temporary files
  const tempFiles = fs.readdirSync(GALLERY_DIR).filter(file => file.startsWith(tempPrefix));
  
  // Process each file for final naming
  tempFiles.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const oldPath = path.join(GALLERY_DIR, file);
    
    // Format the new index with leading zeros
    const paddedIndex = String(nextIndex).padStart(PADDING, '0');
    const newFilename = `${TARGET_PREFIX}${paddedIndex}${ext === '.jpeg' ? '.jpg' : ext}`;
    const newPath = path.join(GALLERY_DIR, newFilename);
    
    // Rename the file
    const originalName = originalNames[file];
    console.log(`Renaming ${originalName} to ${newFilename}`);
    
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`✓ Successfully renamed to ${newFilename}`);
    } catch (error) {
      console.error(`× Error renaming ${originalName}: ${error.message}`);
    }
    
    nextIndex++;
  });

  console.log('\nRenaming complete!');
  console.log(`Total renamed files: ${imageFiles.length}`);
  console.log(`Final index: ${nextIndex - 1}`);
  console.log('\nYou may need to update references in your code to these files.');
}); 