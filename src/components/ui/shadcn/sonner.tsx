"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      position="bottom-right"
      expand={false}
      richColors={false}
      closeButton={false}
      swipeDirections={['right', 'left']}
      gap={12}
      visibleToasts={5}
      toastOptions={{
        style: {
          border: 'none',
          background: 'transparent',
          backdropFilter: 'none',
          zIndex: 40,
        },
        className: 'sonner-toast',
      }}
      {...props}
    />
  );
};

export { Toaster };
