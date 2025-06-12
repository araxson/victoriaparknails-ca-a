import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/data/gallery";

export function GallerySection() {
  // Get featured gallery images
  const featuredImages = galleryImages
    .filter(image => image.featured)
    .slice(0, 8);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Browse our gallery of beautiful nail designs and services
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {featuredImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-xl group relative">
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
} 