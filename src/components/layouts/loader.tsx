"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BUSINESS_CONSTANTS } from "@/lib/constants";

// Types
interface LoaderContextType {
  isTransitioning: boolean;
  startTransition: () => void;
}

interface LoaderProps {
  autoStart?: boolean;
  duration?: number;
  onComplete?: () => void;
}

interface TransitionProviderProps {
  children: ReactNode;
  enableInterception?: boolean;
}

// Context
const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function useLoaderTransition() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoaderTransition must be used within LoaderProvider");
  }
  return context;
}

// Main App Loader Component
export function Loader({ autoStart = true, duration = 3000, onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<'hidden' | 'entering' | 'visible' | 'exiting'>('entering');
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    if (!autoStart) {
      setShouldShow(false);
      return;
    }

    const timers: NodeJS.Timeout[] = [];

    // Show content immediately, then stagger the animations
    timers.push(setTimeout(() => setPhase('visible'), 200));
    
    // Start exit
    timers.push(setTimeout(() => setPhase('exiting'), duration - 800));
    
    // Complete
    timers.push(setTimeout(() => {
      setPhase('hidden');
      setShouldShow(false);
      onComplete?.();
    }, duration));

    return () => timers.forEach(clearTimeout);
  }, [autoStart, duration, onComplete]);

  if (!shouldShow) return null;

  const containerClass = `fixed inset-0 z-[9999] bg-primary flex items-center justify-center transition-transform duration-700 ease-out ${
    phase === 'exiting' ? '-translate-y-full' : 
    phase === 'entering' ? 'translate-y-0' : 'translate-y-0'
  }`;

  return (
    <div className={containerClass}>
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div
          className={`transition-all duration-500 ease-out ${
            phase === 'visible' 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{ transitionDelay: phase === 'visible' ? '200ms' : '0ms' }}
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image
              src="/Victoria_Park_Nails_Spa_Logo_Primary_small.png"
              alt={BUSINESS_CONSTANTS.name.display}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div
          className={`text-center transition-all duration-500 ease-out ${
            phase === 'visible' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: phase === 'visible' ? '400ms' : '0ms' }}
        >
          <h1 className="text-xl md:text-2xl font-playfair font-semibold text-primary-foreground mb-2">
            {BUSINESS_CONSTANTS.name.display}
          </h1>
          <p className="text-primary-foreground/80 text-sm md:text-base font-light">
            Premier Nail Care & Spa Services
          </p>
        </div>

        {/* Loading Dots */}
        <div
          className={`flex gap-2 transition-all duration-300 ease-out ${
            phase === 'visible' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: phase === 'visible' ? '600ms' : '0ms' }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary-foreground/60 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 200}ms`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Page Transition Component
export function PageTransition({ isVisible = false }: { isVisible?: boolean }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsActive(true);
      const timer = setTimeout(() => setIsActive(false), 600);
      return () => clearTimeout(timer);
    } else {
      setIsActive(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div
        className={`absolute inset-0 bg-primary transition-transform duration-500 ease-out ${
          isActive ? 'translate-y-0' : 'translate-y-full'
        }`}
      />
    </div>
  );
}

// Transition Provider
export function LoaderProvider({ children, enableInterception = true }: TransitionProviderProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();

  const startTransition = () => {
    setIsTransitioning(true);
    setShowTransition(true);
  };

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2800); // Slightly before loader completes for smooth transition

    return () => clearTimeout(timer);
  }, []);

  // Link interception
  useEffect(() => {
    if (!enableInterception) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (!link?.href) return;

      try {
        const url = new URL(link.href);
        const current = new URL(window.location.href);
        
        const isInternal = url.origin === current.origin;
        const isDifferent = url.pathname !== current.pathname;
        const isNotHash = !(url.pathname === current.pathname && url.hash);
        const isNotExternal = !link.target || link.target === '_self';
        
        if (isInternal && isDifferent && isNotHash && isNotExternal) {
          e.preventDefault();
          startTransition();
          
          setTimeout(() => {
            window.location.href = link.href;
          }, 300);
        }
      } catch (error) {
        console.warn('Navigation error:', error);
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [enableInterception]);

  // Reset on route change
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setShowTransition(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [pathname, isTransitioning]);

  return (
    <LoaderContext.Provider value={{ isTransitioning, startTransition }}>
      <PageTransition isVisible={showTransition} />
      <div 
        className={`transition-opacity duration-500 ease-in-out ${
          isInitialLoad || isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </LoaderContext.Provider>
  );
}

// Default export for backward compatibility
export default Loader;