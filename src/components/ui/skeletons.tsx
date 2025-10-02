import { Skeleton } from "@/components/ui/shadcn/skeleton";
import { cn } from "@/lib/utils";
import { getGridConfig, MASONRY_GRID } from "@/lib/gallery-config";

// Basic Gallery Skeleton
interface GallerySkeletonProps {
  count?: number;
  columns?: 2 | 3 | 4 | 5 | 6;
  variant?: "default" | "masonry";
  className?: string;
}

const MASONRY_HEIGHTS = [
  "h-48", "h-64", "h-56", "h-72", "h-60", "h-80", "h-52", "h-68"
];

export function GallerySkeleton({ 
  count = 8, 
  columns = 5, 
  variant = "default",
  className 
}: GallerySkeletonProps) {
  const { grid: gridCols } = getGridConfig(columns);

  if (variant === "masonry") {
    return (
      <div className={cn(MASONRY_GRID, className)}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <Skeleton 
              className={cn(
                "w-full rounded-xl",
                MASONRY_HEIGHTS[index % MASONRY_HEIGHTS.length]
              )} 
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn(`grid ${gridCols} gap-4 sm:gap-6 md:gap-8`, className)}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton 
          key={index} 
          className="w-full aspect-square rounded-xl" 
        />
      ))}
    </div>
  );
}

// Section Skeleton
interface SectionSkeletonProps {
  className?: string;
  showHeader?: boolean;
  children?: React.ReactNode;
}

export function SectionSkeleton({ className, showHeader = true, children }: SectionSkeletonProps) {
  return (
    <div className={cn("py-16", className)}>
      <div className="container">
        {showHeader && (
          <div className="text-center mb-12 space-y-4">
            <Skeleton className="h-6 w-24 mx-auto rounded-full" />
            <Skeleton className="h-8 w-1/2 mx-auto" />
            <Skeleton className="h-4 w-2/3 mx-auto" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

// Card Skeleton  
interface CardSkeletonProps {
  className?: string;
  showFooter?: boolean;
  showBadge?: boolean;
  imageHeight?: string;
}

export function CardSkeleton({ 
  className, 
  showFooter = true, 
  showBadge = false,
  imageHeight = "h-48"
}: CardSkeletonProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-0 overflow-hidden", className)}>
      <Skeleton className={cn("w-full rounded-t-lg rounded-b-none", imageHeight)} />
      
      <div className="p-6 space-y-4">
        {showBadge && (
          <Skeleton className="h-5 w-20 rounded-full" />
        )}
        
        <Skeleton className="h-6 w-3/4" />
        
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>
      
      {showFooter && (
        <div className="p-6 pt-0">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      )}
    </div>
  );
}

// Service Card Skeleton
interface ServiceCardSkeletonProps {
  className?: string;
}

export function ServiceCardSkeleton({ className }: ServiceCardSkeletonProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-6 space-y-4", className)}>
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div className="space-y-2 flex-1">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <div className="text-right space-y-1">
            <Skeleton className="h-7 w-16" />
            <Skeleton className="h-3 w-12" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>
      </div>
      
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  );
}

// Team Member Skeleton
interface TeamMemberSkeletonProps {
  className?: string;
}

export function TeamMemberSkeleton({ className }: TeamMemberSkeletonProps) {
  return (
    <div className={cn("rounded-lg border bg-card overflow-hidden", className)}>
      <div className="p-4 bg-gradient-to-b from-primary/5 to-secondary/20">
        <div className="flex items-start gap-4">
          <Skeleton className="w-20 h-20 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-1/3" />
            
            <div className="flex flex-wrap gap-1 pt-1">
              <Skeleton className="h-5 w-16 rounded-full" />
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-5 w-14 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t" />
      
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <Skeleton className="h-3 w-3 rounded" />
            <Skeleton className="h-3 w-20" />
          </div>
          <div className="flex flex-wrap gap-1">
            <Skeleton className="h-4 w-16 rounded-full" />
            <Skeleton className="h-4 w-20 rounded-full" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Skeleton className="h-3 w-10" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>
      </div>
      
      <div className="p-4 pt-0">
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>
  );
} 