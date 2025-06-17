import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), 'public', 'images', 'gallery');
    
    // Check if directory exists
    if (!fs.existsSync(galleryPath)) {
      return NextResponse.json({ error: 'Gallery directory not found' }, { status: 404 });
    }

    // Read all files from the directory
    const files = fs.readdirSync(galleryPath);
    
    // Filter for image files and sort them
    const imageFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
      })
      .sort();

    // Create gallery images array
    const galleryImages = imageFiles.map((filename) => ({
      src: `/images/gallery/${filename}`,
      alt: `Victoria Park Nails gallery image`,
    }));

    return NextResponse.json({ images: galleryImages });
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return NextResponse.json({ error: 'Failed to load gallery images' }, { status: 500 });
  }
}
