import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm md:text-base font-medium transition-all " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 " +
  "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] " +
  "aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/50 aria-invalid:border-destructive",
  {    variants: {
      variant: {
        default: 
          "bg-primary text-primary-foreground hover:bg-primary/90 " +
          "dark:hover:bg-primary/85 dark:focus-visible:ring-primary/30",
        destructive: 
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 " + 
          "focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:hover:bg-destructive/85",
        outline: 
          "border bg-background hover:bg-accent hover:text-accent-foreground " + 
          // Improved dark mode borders and hover states
          "dark:bg-background/95 dark:border-input/80 dark:hover:bg-accent/70 dark:hover:text-accent-foreground/100",
        secondary: 
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 " + 
          // Enhanced dark mode contrast
          "dark:bg-secondary/95 dark:text-secondary-foreground/95 dark:hover:bg-secondary/75 dark:hover:text-secondary-foreground/100",
        ghost: 
          "hover:bg-accent hover:text-accent-foreground " +
          "dark:hover:bg-accent/60 dark:hover:text-accent-foreground/100",
        link: 
          "text-primary underline-offset-4 hover:underline " +
          "dark:text-primary/95 dark:hover:text-primary/100"
      },
      size: {
        default: "h-11 px-4 py-2 has-[>svg]:px-3",
        sm: "h-10 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-8 has-[>svg]:px-4",
        icon: "size-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
