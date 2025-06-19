# Victoria Park Nails and Spa Website

**Fully Static Site Generated (SSG) Next.js Website**

A high-performance, statically generated website for Victoria Park Nails and Spa in Calgary, Alberta. This project has been **fully optimized for Static Site Generation (SSG)** to deliver maximum performance, SEO benefits, and user experience.

## 🚀 SSG Optimizations Implemented

### ✅ Static Export Configuration
- **Static Export Enabled**: `output: 'export'` in `next.config.ts`
- **Force Static Rendering**: All pages use `export const dynamic = 'force-static'`
- **No Server Dependencies**: Completely client-side deployable
- **CDN Ready**: All pages pre-rendered at build time

### ✅ Data Layer Optimization  
- **Static Gallery**: All 22 gallery images defined statically (no API calls)
- **Removed API Routes**: Eliminated `/api/gallery` route for pure static generation
- **Build-Time Data**: All business data, services, testimonials available at build time
- **Type-Safe Exports**: Centralized data exports with TypeScript safety

### ✅ Performance Optimizations
- **Image Optimization**: WebP/AVIF formats with optimized sizes
- **Force Static Pages**: Homepage, Gallery, Services, Offers, Contact all SSG
- **No Client-Side Fetching**: All data pre-loaded at build time
- **Minimal JavaScript**: Server Components by default, client components only where needed

### ✅ SEO & Metadata
- **Static Sitemap**: Auto-generated sitemap with all routes
- **Robots.txt**: Optimized for search engines  
- **Structured Data**: JSON-LD schema for local business
- **Open Graph**: Complete social media optimization

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
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

# Production Builds
npm run build        # Standard Next.js build
npm run build:static # Build + Export static files
npm run export       # Export static files to /out
npm run serve:static # Serve static files locally

# Quality Assurance
npm run lint         # Run ESLint
```

## 🎯 SSG Benefits Achieved

1. **⚡ Lightning Fast**: All pages pre-rendered at build time
2. **🌐 CDN Deployable**: Works on any static hosting (Vercel, Netlify, etc.)
3. **📱 Mobile Optimized**: Progressive Web App features
4. **🔍 SEO Perfect**: All meta tags, structured data, sitemap included
5. **💰 Cost Effective**: No server costs, pure static hosting
6. **🛡️ Security**: No server attack surface
7. **📊 Analytics Ready**: Google Analytics integration

## 🏗 Architecture

```
src/
├── app/                 # App Router pages (all SSG)
│   ├── page.tsx        # Homepage (static)
│   ├── gallery/        # Gallery page (static)
│   ├── services/       # Services page (static)
│   ├── offers/         # Offers page (static)
│   ├── contact/        # Contact page (static)
│   ├── sitemap.ts      # Static sitemap
│   └── robots.ts       # Static robots.txt
├── components/         # Reusable UI components
├── data/              # Static data (build-time)
├── hooks/             # Custom React hooks
└── lib/               # Utilities and helpers
```

## 🚀 Deployment

This website is fully static and can be deployed to any CDN or static hosting service:

```bash
npm run build:static
# Upload /out directory to your hosting provider
```

**Recommended Hosts**: Vercel, Netlify, GitHub Pages, AWS S3, Cloudflare Pages

## 📄 Pages

- **Homepage** (`/`) - Hero, services overview, gallery preview, testimonials
- **Services** (`/services`) - Complete service menu with pricing
- **Gallery** (`/gallery`) - Full photo gallery with 22 professional images
- **Offers** (`/offers`) - Current promotions and special deals
- **Contact** (`/contact`) - Location, hours, contact form

All pages are **statically generated** with complete SEO optimization.

---

**Victoria Park Nails and Spa** - Calgary's Premier Nail Salon  
📍 1411 1st Street SE, Calgary, AB T2G 2G3  
📞 (403) 719-3600  
🌐 [victoriaparknails.ca](https://victoriaparknails.ca)
