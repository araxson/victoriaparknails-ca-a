"use client";

import { useEffect, useRef, useCallback } from "react";
import { toast } from "sonner";
import { GiftIcon, ArrowRightIcon, SparklesIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { offers } from "@/data/offers";

export const Notification = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme } = useTheme();
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const showNotifications = useCallback(() => {
    // Clear any existing timers
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];

    if (offers.length > 0) {
      offers.forEach((offer, index) => {
        const delay = 2000 + (index * 4000); // Start at 2s, then every 4s after
        
        const timer = setTimeout(() => {
          const isDark = theme === "dark";          toast(
            <div 
              onClick={() => router.push("/offers")} 
              className="cursor-pointer w-full group"
            >
              <div className="flex items-start gap-3 p-1">
                {/* Icon with gradient background */}
                <div className={`
                  flex-shrink-0 p-2 rounded-xl transition-all duration-300 group-hover:scale-110
                  ${isDark 
                    ? 'bg-gradient-to-br from-amber-400/20 to-orange-500/20 border border-amber-400/30' 
                    : 'bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300'
                  }
                `}>                  <GiftIcon className={`
                    h-5 w-5 transition-colors duration-300
                    ${isDark ? 'text-amber-400' : 'text-amber-500'}
                  `} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`
                      font-semibold text-sm leading-tight truncate
                      ${isDark ? 'text-slate-100' : 'text-slate-900'}
                    `}>
                      {offer.title}
                    </h4>
                    <SparklesIcon className={`
                      h-3 w-3 flex-shrink-0 opacity-60
                      ${isDark ? 'text-amber-400' : 'text-amber-500'}
                    `} />
                  </div>
                  
                  <p className={`
                    text-xs leading-relaxed opacity-80 line-clamp-2
                    ${isDark ? 'text-slate-300' : 'text-slate-700'}
                  `}>
                    {offer.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className={`
                  flex-shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 
                  transition-all duration-300
                `}>
                  <ArrowRightIcon className={`
                    h-4 w-4
                    ${isDark ? 'text-slate-400' : 'text-slate-600'}
                  `} />
                </div>
              </div>
            </div>, 
            {
              duration: 12000, // 12 seconds for better readability
              className: `
                group relative overflow-hidden border-0 shadow-xl
                ${isDark 
                  ? 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900' 
                  : 'bg-gradient-to-r from-white via-slate-50 to-white'
                }
                hover:shadow-2xl hover:scale-[1.02] 
                transition-all duration-300 ease-out
                before:absolute before:inset-0 before:bg-gradient-to-r 
                ${isDark 
                  ? 'before:from-slate-600/20 before:via-transparent before:to-slate-700/20' 
                  : 'before:from-amber-500/10 before:via-transparent before:to-orange-500/10'
                }
                before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
              `
            }
          );
        }, delay);
        
        timersRef.current.push(timer);
      });
    }
  }, [theme, router]);

  // Show notifications on initial load
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      showNotifications();
    }, 1000); // Wait 1 second after page load
    
    return () => clearTimeout(initialTimer);
  }, [showNotifications]);

  // Show notifications on page change
  useEffect(() => {
    // Don't show notifications immediately on the first load (handled by the initial useEffect)
    const pageChangeTimer = setTimeout(() => {
      showNotifications();
    }, 1500); // Show notifications 1.5 seconds after page change

    return () => clearTimeout(pageChangeTimer);
  }, [pathname, showNotifications]);

  // Cleanup function
  useEffect(() => {
    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return null; // This component doesn't render anything visible
};