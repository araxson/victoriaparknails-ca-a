import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={cn("space-y-4 mb-12", centered && "text-center", className)}
    >
      {badge && <Badge variant="secondary">{badge}</Badge>}

      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>

      {description && (
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
