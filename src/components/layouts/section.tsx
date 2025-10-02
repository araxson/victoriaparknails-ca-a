import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface SectionProps extends ComponentProps<"section"> {
  variant?: "default" | "muted" | "accent" | "secondary";
}

export function Section({
  className,
  children,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16",
        {
          "bg-background": variant === "default",
          "bg-muted/30": variant === "muted",
          "bg-accent/10": variant === "accent",
          "bg-secondary/20": variant === "secondary",
        },
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
