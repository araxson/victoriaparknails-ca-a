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
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] max-h-[95vh] w-full h-auto p-0 bg-background/95 backdrop-blur-sm border border-border/50 overflow-hidden flex flex-col rounded-lg"
        showCloseButton={false}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Image Gallery</DialogTitle>
        </DialogHeader>
        <div className="flex-1 min-h-0 overflow-hidden flex flex-col p-0">
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
