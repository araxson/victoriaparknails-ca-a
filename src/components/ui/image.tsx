"use client";

import { useState } from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ImageProps extends Omit<NextImageProps, "onError"> {
  fallbackSrc?: string;
  className?: string;
}

export function Image({
  src,
  alt,
  fallbackSrc = "/Placeholder_view_vector.svg",
  className,
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState<string | StaticImport>(src);
  const [isError, setIsError] = useState(false);

  return (
    <NextImage
      src={imgSrc}
      alt={alt}
      className={cn(className, isError ? "bg-muted/30" : "")}
      onError={() => {
        setImgSrc(fallbackSrc);
        setIsError(true);
      }}
      {...props}
    />
  );
} 