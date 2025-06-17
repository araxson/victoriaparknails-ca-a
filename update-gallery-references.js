// Script to update gallery.ts with new image references
const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(__dirname, 'public', 'images', 'gallery');
const GALLERY_DATA_FILE = path.join(__dirname, 'src', 'data', 'gallery.ts');
const TARGET_PREFIX = 'victoriaparknails-';

// Read the gallery directory to get actual files
console.log('Reading gallery directory...');
const files = fs.readdirSync(GALLERY_DIR);

// Filter image files and sort them
const imageFiles = files
  .filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp';
  })
  .filter(file => file.startsWith(TARGET_PREFIX))
  .sort();

console.log(`Found ${imageFiles.length} images with correct naming convention.`);

// Create gallery entries with descriptions from the original file
console.log('Reading current gallery data...');
const currentGalleryData = fs.readFileSync(GALLERY_DATA_FILE, 'utf8');

// Extract descriptions and featured status from current data
const descriptions = {};
const featured = {};

// Use regex to extract the current descriptions and featured status
const idRegex = /id: "(victoriaparknails-\d+)"/g;
const altRegex = /alt: "([^"]+)"/g;
const featuredRegex = /featured: (true|false)/g;

let idMatch;
let altMatch;
let featuredMatch;

while ((idMatch = idRegex.exec(currentGalleryData)) !== null) {
  const id = idMatch[1];
  
  // Find the next alt text
  altMatch = altRegex.exec(currentGalleryData);
  if (altMatch) {
    descriptions[id] = altMatch[1];
  }
  
  // Find the next featured status
  featuredMatch = featuredRegex.exec(currentGalleryData);
  if (featuredMatch) {
    featured[id] = featuredMatch[1] === 'true';
  }
}

// Generate new gallery data
console.log('Generating new gallery data...');
let newGalleryData = `import { GalleryImage } from "./types";\n\nexport const galleryImages: GalleryImage[] = [\n`;

imageFiles.forEach(file => {
  const filename = path.parse(file).name;
  const ext = path.extname(file).toLowerCase();
  
  // Use the existing description and featured status if available, or provide defaults
  const description = descriptions[filename] || "Beautiful nail design";
  const isFeatured = featured[filename] !== undefined ? featured[filename] : false;
  
  newGalleryData += `  {\n`;
  newGalleryData += `    id: "${filename}",\n`;
  newGalleryData += `    src: "/images/gallery/${file}",\n`;
  newGalleryData += `    alt: "${description}",\n`;
  newGalleryData += `    featured: ${isFeatured},\n`;
  newGalleryData += `  },\n`;
});

newGalleryData += `];\n\n`;
newGalleryData += `/**\n * Get featured gallery images for homepage and promotional content\n */\nexport function getFeaturedGalleryImages(): GalleryImage[] {\n  return galleryImages.filter((image) => image.featured);\n}\n`;

// Write the new gallery data file
console.log('Writing new gallery data file...');
fs.writeFileSync(GALLERY_DATA_FILE, newGalleryData, 'utf8');

console.log('Gallery data updated successfully!');
console.log(`Total images in gallery: ${imageFiles.length}`); 