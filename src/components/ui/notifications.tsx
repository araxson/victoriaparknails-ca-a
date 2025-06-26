"use client";

import { useEffect, useRef, useCallback } from "react";
import { toast } from "sonner";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { offers } from "@/data/offers";

export const Notification = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const lastShownTimeRef = useRef<Record<string, number>>({});

  const showNotifications = useCallback(() => {
    // Clear any existing timers
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];

    // Check if notifications were shown recently for this path (within 30 seconds)
    const now = Date.now();
    const lastShown = lastShownTimeRef.current[pathname] || 0;
    const timeSinceLastShown = now - lastShown;
    
    if (timeSinceLastShown < 30000) return; // 30 seconds cooldown

    // Mark this path as having shown notifications
    lastShownTimeRef.current[pathname] = now;

    if (offers.length > 0) {
      offers.forEach((offer, index) => {
        const delay = 2000 + (index * 4000); // Start at 2s, then every 4s after
        
        const timer = setTimeout(() => {
          const isDark = theme === "dark";
          
          toast(
            <div className="w-full">
              <div className="flex items-center gap-3">
                {/* Offer Icon */}
                <div className="flex-shrink-0">
                  <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center
                    ${isDark 
                      ? 'bg-primary/20 border border-primary/30' 
                      : 'bg-primary/15 border border-primary/25'
                    }
                  `}>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24"
                      fill="none" 
                      className="text-primary"
                    >
                      <path 
                        d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <circle cx="7" cy="7" r="1" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-sm leading-tight truncate">
                      {offer.title}
                    </h4>
                    <span className="text-xs text-muted-foreground flex-shrink-0">
                      now
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-tight line-clamp-2">
                    {offer.description}
                  </p>
                </div>
              </div>
            </div>,
            {
              duration: 8000,
              dismissible: true,
              className: `
                relative border rounded-xl backdrop-blur-lg transition-all
                ${isDark 
                  ? 'bg-popover/95 border-border/50' 
                  : 'bg-popover/95 border-border/50'
                }
              `,              style: {
                padding: '12px 16px',
                minHeight: '60px',
                backdropFilter: 'blur(16px)',
              }
            }
          );
        }, delay);
        
        timersRef.current.push(timer);
      });
    }
  }, [theme, pathname]);

  // Show notifications on initial load and path changes
  useEffect(() => {
    const timer = setTimeout(() => {
      showNotifications();
    }, 1000); // Wait 1 second after page load or change
    
    return () => clearTimeout(timer);
  }, [pathname, showNotifications]);

  // Cleanup function
  useEffect(() => {
    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return null;
};