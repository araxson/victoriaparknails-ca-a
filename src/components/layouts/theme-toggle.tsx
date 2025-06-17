"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Mount after client-side hydration to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR or before hydration, return a placeholder
  if (!mounted) {
    return (
      <div
        className="w-11 h-6 bg-muted/30 rounded-full animate-pulse"
        aria-hidden="true"
      />
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Define custom styles for the switch based on theme
  const switchStyle = {
    '--switch-bg': theme === 'dark' ? '#1e3a8a' : '#f59e0b' // blue-900 : amber-500
  } as React.CSSProperties;

  return (
    <div className="flex items-center gap-2">
      <Sun 
        className={cn(
          "h-4 w-4 transition-colors",
          theme === "light" ? "text-amber-500" : "text-slate-400/60"
        )} 
      />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        style={switchStyle}
        className="theme-toggle-switch [--switch-bg:var(--switch-bg)] data-[state=checked]:!bg-[var(--switch-bg)] data-[state=unchecked]:!bg-[var(--switch-bg)]"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      />
      <Moon 
        className={cn(
          "h-4 w-4 transition-colors",
          theme === "dark" ? "text-blue-400" : "text-slate-400/60"
        )} 
      />
    </div>
  );
}
