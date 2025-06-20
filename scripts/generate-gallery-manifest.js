#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

/**
 * Build-time gallery manifest generator
 * Creates a static JSON file with all gallery images for static export
 */

const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'gallery');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'data', 'gallery-manifest.json');
const SUPPORTED_FORMATS = ['.webp', '.jpg', '.jpeg', '.png', '.avif', '.svg'];

/**
 * Generate meaningful alt text from filename
 */
function generateAltText(filename) {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
  
  // Handle different naming patterns
  if (nameWithoutExt.includes('victoriaparknails')) {
    const number = nameWithoutExt.match(/\d+/)?.[0];
    return `Victoria Park Nails - Professional nail art and design showcase ${number || ''}`.trim();
  }
  
  // Convert filename to readable alt text
  const readable = nameWithoutExt
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .trim();
    
  return `Victoria Park Nails - ${readable}`;
}

async function generateGalleryManifest() {
  console.log('🖼️  Generating gallery manifest...\n');
  
  try {
    // Create directory if it doesn't exist
    const outputDir = path.dirname(OUTPUT_FILE);
    await fs.mkdir(outputDir, { recursive: true });

    // Read gallery directory
    const files = await fs.readdir(GALLERY_DIR);
    
    // Filter and process only supported image formats
    const imageFiles = files.filter(file => 
      SUPPORTED_FORMATS.some(format => 
        file.toLowerCase().endsWith(format)
      )
    );

    // Create gallery image objects
    const galleryImages = imageFiles.map(file => ({
      src: `/images/gallery/${file}`,
      alt: generateAltText(file),
      filename: file
    }));

    // Create manifest object
    const manifest = {
      generated: new Date().toISOString(),
      totalImages: galleryImages.length,
      images: galleryImages,
      supportedFormats: SUPPORTED_FORMATS
    };

    // Write manifest file
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(manifest, null, 2));

    console.log(`✅ Generated gallery manifest:`);
    console.log(`   📁 Output: ${OUTPUT_FILE}`);
    console.log(`   📊 Total images: ${galleryImages.length}`);
    console.log(`   🕒 Generated: ${manifest.generated}\n`);

    // Log image distribution
    const formatCounts = {};
    galleryImages.forEach(img => {
      const ext = path.extname(img.filename).toLowerCase();
      formatCounts[ext] = (formatCounts[ext] || 0) + 1;
    });

    console.log(`📈 Format distribution:`);
    Object.entries(formatCounts).forEach(([format, count]) => {
      const percentage = ((count / galleryImages.length) * 100).toFixed(1);
      console.log(`   ${format}: ${count} files (${percentage}%)`);
    });

    console.log(`\n✨ Gallery manifest generated successfully!`);
    
    return manifest;

  } catch (error) {
    console.error('❌ Error generating gallery manifest:', error.message);
    
    // Create fallback manifest
    const fallbackManifest = {
      generated: new Date().toISOString(),
      totalImages: 0,
      images: [],
      supportedFormats: SUPPORTED_FORMATS,
      error: error.message
    };

    await fs.writeFile(OUTPUT_FILE, JSON.stringify(fallbackManifest, null, 2));
    console.log('⚠️  Created fallback manifest with empty images array');
    
    return fallbackManifest;
  }
}

// Run the generator
if (require.main === module) {
  generateGalleryManifest().then(manifest => {
    process.exit(0);
  }).catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { generateGalleryManifest }; 