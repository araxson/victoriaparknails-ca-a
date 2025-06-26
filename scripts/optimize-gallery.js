#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

/**
 * Gallery optimization script for Victoria Park Nails
 * This script runs during build to ensure optimal gallery performance
 */

const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'gallery');
const SUPPORTED_FORMATS = ['.webp', '.jpg', '.jpeg', '.png', '.avif'];
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB warning threshold

async function analyzeGallery() {
  console.log('🖼️  Analyzing gallery images...\n');
  
  try {
    const files = await fs.readdir(GALLERY_DIR);
    const imageFiles = files.filter(file => 
      SUPPORTED_FORMATS.some(format => 
        file.toLowerCase().endsWith(format)
      )
    );

    console.log(`📊 Gallery Analysis:`);
    console.log(`   Total files: ${files.length}`);
    console.log(`   Image files: ${imageFiles.length}`);
    console.log(`   Supported formats: ${SUPPORTED_FORMATS.join(', ')}\n`);

    // Analyze file sizes and formats
    const analysis = {
      webp: 0,
      jpg: 0,
      png: 0,
      other: 0,
      largeFiles: [],
      totalSize: 0
    };

    for (const file of imageFiles) {
      const filePath = path.join(GALLERY_DIR, file);
      const stats = await fs.stat(filePath);
      const sizeInMB = stats.size / (1024 * 1024);
      
      analysis.totalSize += stats.size;

      // Count by format
      if (file.toLowerCase().endsWith('.webp')) {
        analysis.webp++;
      } else if (file.toLowerCase().match(/\.(jpg|jpeg)$/)) {
        analysis.jpg++;
      } else if (file.toLowerCase().endsWith('.png')) {
        analysis.png++;
      } else {
        analysis.other++;
      }

      // Check for large files
      if (stats.size > MAX_FILE_SIZE) {
        analysis.largeFiles.push({
          name: file,
          size: sizeInMB.toFixed(2) + ' MB'
        });
      }
    }

    const totalSizeInMB = (analysis.totalSize / (1024 * 1024)).toFixed(2);

    console.log(`📈 Format Distribution:`);
    console.log(`   WebP: ${analysis.webp} files (${((analysis.webp / imageFiles.length) * 100).toFixed(1)}%)`);
    console.log(`   JPEG: ${analysis.jpg} files (${((analysis.jpg / imageFiles.length) * 100).toFixed(1)}%)`);
    console.log(`   PNG: ${analysis.png} files (${((analysis.png / imageFiles.length) * 100).toFixed(1)}%)`);
    console.log(`   Other: ${analysis.other} files (${((analysis.other / imageFiles.length) * 100).toFixed(1)}%)`);
    console.log(`   Total gallery size: ${totalSizeInMB} MB\n`);

    // Performance recommendations
    console.log(`🚀 Performance Recommendations:`);
    
    if (analysis.webp < imageFiles.length * 0.8) {
      console.log(`   ⚠️  Consider converting more images to WebP for better performance`);
      console.log(`      Currently ${analysis.webp}/${imageFiles.length} images are WebP format`);
    } else {
      console.log(`   ✅ Good WebP adoption (${analysis.webp}/${imageFiles.length} images)`);
    }

    if (analysis.largeFiles.length > 0) {
      console.log(`   ⚠️  Large files detected (${analysis.largeFiles.length} files > 2MB):`);
      analysis.largeFiles.forEach(file => {
        console.log(`      - ${file.name} (${file.size})`);
      });
      console.log(`      Consider compressing these images for better load times`);
    } else {
      console.log(`   ✅ All images are under 2MB - good for web performance`);
    }

    if (parseFloat(totalSizeInMB) > 50) {
      console.log(`   ⚠️  Total gallery size is ${totalSizeInMB} MB`);
      console.log(`      Consider implementing lazy loading for better initial page load`);
    } else {
      console.log(`   ✅ Total gallery size (${totalSizeInMB} MB) is reasonable`);
    }

    console.log(`\n✨ Gallery optimization analysis complete!`);
    
    return {
      totalImages: imageFiles.length,
      totalSize: totalSizeInMB,
      webpPercentage: ((analysis.webp / imageFiles.length) * 100).toFixed(1),
      largeFileCount: analysis.largeFiles.length
    };

  } catch (error) {
    console.error('❌ Error analyzing gallery:', error.message);
    process.exit(1);
  }
}

// Run the analysis
if (require.main === module) {
  analyzeGallery().then(results => {
    process.exit(0);
  }).catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { analyzeGallery }; 