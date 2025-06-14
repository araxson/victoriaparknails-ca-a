"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Root, Thumb } from "@radix-ui/react-switch";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-11 h-6 bg-muted/30 rounded-full animate-pulse"
        aria-hidden="true"
      />
    );
  }

  return (
    <Root
      checked={theme === "dark"}
      onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full",
        "border-2 border-transparent transition-colors duration-300 ease-in-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
        "data-[state=unchecked]:bg-amber-300",
        "data-[state=checked]:bg-slate-800"
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <Thumb
        className={cn(
          "pointer-events-none relative block h-5 w-5 rounded-full ring-0",
          "transition-transform duration-300 ease-in-out",
          "bg-white",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      >
        <Sun
          size={12}
          className="absolute inset-0 m-auto text-amber-500 transition-all duration-300 ease-in-out group-data-[state=unchecked]:opacity-100 group-data-[state=unchecked]:rotate-0 group-data-[state=checked]:opacity-0 group-data-[state=checked]:-rotate-90"
        />
        <Moon
          size={12}
          className="absolute inset-0 m-auto text-slate-800 transition-all duration-300 ease-in-out group-data-[state=unchecked]:opacity-0 group-data-[state=unchecked]:rotate-90 group-data-[state=checked]:opacity-100 group-data-[state=checked]:rotate-0"
        />
      </Thumb>
    </Root>
  );
}

export { ThemeToggle };