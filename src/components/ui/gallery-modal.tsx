"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { GalleryImage } from "@/data/types";
import { GalleryCarousel } from "@/components/ui/gallery-carousel";

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
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative z-10 w-full h-full max-w-7xl max-h-screen p-4 overflow-auto">
        <div className="flex items-center justify-center min-h-full">
          <GalleryCarousel
            images={images}
            initialIndex={initialIndex}
            onClose={onClose}
            showThumbnails={true}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
