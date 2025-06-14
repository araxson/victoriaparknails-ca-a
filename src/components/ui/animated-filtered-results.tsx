'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { useMultipleElementsAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface AnimatedFilteredResultsProps {
  children: ReactNode[];
  className?: string;
  itemDelay?: number;
  itemThreshold?: number;
  triggerKey?: string | number; // Key that changes when filter updates
}

export function AnimatedFilteredResults({ 
  children, 
  className = '',
  itemDelay = 80, // Reduced default delay
  itemThreshold = 0.2, // Reduced threshold for faster triggering
  triggerKey
}: AnimatedFilteredResultsProps) {
  const childrenArray = Array.isArray(children) ? children : [children];
  const [animationKey, setAnimationKey] = useState(0);
  const prevTriggerKey = useRef(triggerKey);
  
  // Reset animation when filter changes
  useEffect(() => {
    if (triggerKey !== prevTriggerKey.current) {
      setAnimationKey(prev => prev + 1);
      prevTriggerKey.current = triggerKey;
    }
  }, [triggerKey]);
  const { visibleElements, setElementRef } = useMultipleElementsAnimation(
    childrenArray.length,
    {
      threshold: itemThreshold,
      staggerDelay: itemDelay,
      rootMargin: '0px 0px -40px 0px', // Reduced for faster triggering
      triggerOnce: false // Allow re-animation on filter changes
    }
  );

  return (
    <div className={className} key={animationKey}>
      {childrenArray.map((child, index) => (
        <div
          key={`${animationKey}-${index}`}
          ref={setElementRef(index)}
          className={cn(
            'fade-in-on-scroll',
            visibleElements[index] && 'visible'
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// Static animated container for elements that should only animate once
export function AnimatedOnce({ 
  children, 
  className = '',
  animation = 'slideUp',
  delay = 0,
  threshold = 0.2 // Reduced threshold for faster triggering
}: {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  threshold?: number;
}) {const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          } else {
            setIsVisible(true);
            setHasAnimated(true);
          }
        }
      },      {
        threshold,
        rootMargin: '0px 0px -30px 0px', // Reduced for faster triggering
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, delay, hasAnimated]);

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade':
        return 'fade-in-on-scroll';
      case 'slideUp':
        return 'fade-in-on-scroll';
      case 'slideDown':
        return 'fade-in-on-scroll';
      case 'slideLeft':
        return 'fade-in-on-scroll';
      case 'slideRight':
        return 'fade-in-on-scroll';
      case 'scale':
        return 'fade-in-scale-on-scroll';
      default:
        return 'fade-in-on-scroll';
    }
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        getAnimationClasses(),
        isVisible && 'visible',
        className
      )}
    >
      {children}
    </div>
  );
}
