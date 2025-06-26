# Victoria Park Nails and Spa Website

**Next.js 15 Static Export with Dynamic Gallery System**

A high-performance, statically generated website for Victoria Park Nails and Spa in Calgary, Alberta. This project features a **dynamic gallery system** that automatically discovers images from the gallery folder and implements **client-side randomization** for fresh content on every visit, while maintaining full Static Site Generation (SSG) compatibility.

## 🖼️ Dynamic Gallery System

### ✅ Automatic Image Discovery
- **Folder-Based Loading**: Scans `public/images/gallery/` at build time
- **Format Agnostic**: Supports .webp, .jpeg, .jpg, .png, .avif, .svg
- **32 Total Images**: Automatically includes all images regardless of naming
- **Build-Time Manifest**: Generates gallery manifest for static export compatibility

### ✅ Client-Side Randomization
- **Fresh Selection**: 30 random images on gallery page, 8 on homepage
- **Vercel Compatible**: Works perfectly with static exports on Vercel/CDN
- **Fisher-Yates Shuffle**: True randomization algorithm for image selection
- **Refresh Button**: Users can get new random selections without page reload

### ✅ Next.js Image Optimization
- **Automatic Optimization**: WebP/AVIF formats with responsive sizes
- **Lazy Loading**: Images load as they enter viewport
- **Performance**: Optimized for Core Web Vitals
- **Fallback Support**: Graceful degradation for older browsers

## 🚀 Gallery Features

```bash
# Build-time gallery manifest generation
npm run gallery:manifest    # Scan folder and generate manifest
npm run build              # Includes gallery manifest generation

# Gallery Statistics
📊 Total Images: 32
🎲 Random Selection: 30 images (gallery page) / 8 images (homepage)
📱 Responsive: Optimized for all devices
🔄 Client Randomization: Fresh selection on every visit
```

### Gallery System Architecture
```
public/images/gallery/           # Source images (any format/name)
├── vpnail-gallery-00001.jpeg   # Auto-discovered
├── vpnail-gallery-00002.jpeg   # Auto-discovered
└── ...                         # All images included

src/lib/gallery-loader.ts        # Dynamic loading system
├── getAllGalleryImages()        # Load all from manifest
├── getRandomGalleryImages()     # Client-side randomization
└── getFeaturedGalleryImages()   # Homepage featured images

src/data/gallery-manifest.json   # Build-time generated manifest
├── totalImages: 32              # Auto-counted
├── supportedFormats: [...]      # Auto-detected
└── images: [...]                # Auto-generated list
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Gallery**: Dynamic folder-based system with client-side randomization
- **Images**: Next.js Image component with automatic optimization
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + Custom Components
- **TypeScript**: Full type safety
- **Build Tool**: Turbopack
- **Deployment**: Static Export (CDN-ready)

## 📦 Build Commands

```bash
# Development
npm run dev          # Start development server
npm run dev:turbo    # Start with Turbopack

# Gallery Management
npm run gallery:manifest  # Generate gallery manifest from folder
npm run build             # Build with gallery manifest generation

# Production Builds
npm run build:static # Build + Export static files
npm run export       # Export static files to /out
npm run serve:static # Serve static files locally

# Quality Assurance
npm run lint         # Run ESLint
```

## 🎯 Gallery System Benefits

1. **🔄 Dynamic Loading**: Add images to folder → automatic inclusion
2. **🎲 True Randomization**: Fresh selection on every visit (client-side)
3. **⚡ Performance**: Next.js Image optimization + lazy loading  
4. **📱 Responsive**: Adapts to all screen sizes automatically
5. **🌐 CDN Compatible**: Works with static exports on Vercel/Netlify
6. **🛡️ Type Safe**: Full TypeScript support with image type definitions
7. **🔧 Maintenance Free**: No manual updates needed when adding images

## 🏗 Architecture

```
src/
├── app/                    # App Router pages (all SSG)
│   ├── page.tsx           # Homepage with 8 random featured images
│   ├── gallery/           
│   │   ├── page.tsx       # Gallery page with 30 random images
│   │   └── static-gallery-client.tsx  # Client-side randomization
│   ├── services/          # Services page (static)
│   ├── offers/            # Offers page (static)
│   ├── contact/           # Contact page (static)
│   ├── sitemap.ts         # Static sitemap
│   └── robots.ts          # Static robots.txt
├── components/
│   ├── ui/
│   │   ├── gallery-grid.tsx           # Interactive gallery grid
│   │   ├── client-gallery-grid.tsx   # Client-side randomized grid
│   │   ├── gallery-grid-static.tsx   # Server-side static grid
│   │   └── gallery-modal.tsx         # Image modal/lightbox
│   └── sections/
│       └── gallery-section.tsx       # Homepage gallery section
├── data/
│   ├── gallery-manifest.json         # Auto-generated at build time
│   └── index.ts                      # Centralized data exports
├── lib/
│   ├── gallery-loader.ts             # Dynamic gallery system
│   └── gallery-config.ts             # Gallery configuration
└── scripts/
    └── generate-gallery-manifest.js  # Build-time manifest generator
```

## 🚀 Deployment

This website is fully static and can be deployed to any CDN or static hosting service:

```bash
npm run build        # Generates gallery manifest + builds static site
# Upload /out directory to your hosting provider
```

**Recommended Hosts**: Vercel, Netlify, GitHub Pages, AWS S3, Cloudflare Pages

### Adding New Gallery Images

1. Add images to `public/images/gallery/` folder (any format, any name)
2. Run `npm run build` (automatically generates new manifest)
3. Deploy updated site
4. New images will appear in random selections automatically

## 📄 Pages

- **Homepage** (`/`) - Hero, services overview, 8 random gallery images, testimonials
- **Services** (`/services`) - Complete service menu with pricing
- **Gallery** (`/gallery`) - 30 random images with modal view and refresh button
- **Offers** (`/offers`) - Current promotions and special deals
- **Contact** (`/contact`) - Location, hours, contact form

All pages are **statically generated** with complete SEO optimization and the gallery features **client-side randomization** for fresh content on every visit.

---

**Victoria Park Nails and Spa** - Calgary's Premier Nail Salon  
📍 1411 1st Street SE, Calgary, AB T2G 2G3  
📞 (403) 719-3600  
🌐 [victoriaparknails.ca](https://victoriaparknails.ca)
