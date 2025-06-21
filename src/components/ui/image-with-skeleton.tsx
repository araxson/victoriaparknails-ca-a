import * as React from "react";
import { Image } from "./image";
import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { cn } from "@/lib/utils";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  showSkeleton?: boolean;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  onLoad?: () => void;
}

export function ImageWithSkeleton({
  src,
  alt,
  className,
  skeletonClassName,
  showSkeleton = true,
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const handleLoad = React.useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  return (
    <div className={cn("relative", className)}>
      {showSkeleton && !isLoaded && (
        <Skeleton className={cn("absolute inset-0 z-10", skeletonClassName)} />
      )}
      
      <Image
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          !isLoaded ? "opacity-0" : "opacity-100"
        )}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
}
