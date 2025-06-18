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

// Constants
const MODAL_STYLES = {
  content: "max-w-[98vw] sm:max-w-[95vw] md:max-w-[92vw] lg:max-w-[90vw] max-h-[98vh] w-full h-auto p-0 bg-black/5 overflow-hidden flex flex-col rounded-2xl",
  counter: "bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm font-medium border border-white/20",
} as const;

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
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOpenChange = React.useCallback((open: boolean) => {
    if (!open) onClose();
  }, [onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent 
        className={MODAL_STYLES.content}
        showCloseButton={false}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Image Gallery - {initialIndex + 1} of {images.length}</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 min-h-0 overflow-hidden flex flex-col p-0 relative">
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
