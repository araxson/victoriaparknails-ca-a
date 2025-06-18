"use client";

import * as React from "react";
import { GalleryImage } from "@/data/types";
import { GalleryCarousel } from "@/components/ui/gallery-carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/shadcn/dialog";

interface GalleryModalProps {
  images: GalleryImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryModal({
  images,
  initialIndex,
  isOpen,
  onClose,
}: GalleryModalProps) {
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="max-w-[98vw] sm:max-w-[95vw] md:max-w-[92vw] lg:max-w-[90vw] max-h-[98vh] w-full h-auto p-0 bg-black/95 backdrop-blur-xl border-0 overflow-hidden flex flex-col rounded-2xl shadow-2xl"
        showCloseButton={false}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Image Gallery - {initialIndex + 1} of {images.length}</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 min-h-0 overflow-hidden flex flex-col p-0 relative">
          {/* Gallery header with image counter */}
          <div className="absolute top-4 left-4 z-50 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20">
            {initialIndex + 1} / {images.length}
          </div>
          
          <GalleryCarousel
            images={images}
            initialIndex={initialIndex}
            onClose={onClose}
            showThumbnails={true}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
