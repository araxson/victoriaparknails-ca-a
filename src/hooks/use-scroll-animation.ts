'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -30px 0px', // Reduced margin for faster triggering
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          } else {
            setIsVisible(true);
            setHasAnimated(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { elementRef, isVisible };
}

// Hook for staggered animations
export function useStaggeredScrollAnimation(
  count: number,
  options: UseScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -30px 0px', // Reduced margin for faster triggering
    triggerOnce = true,
    delay = 80 // Reduced default delay
  } = options;

  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(count).fill(false)
  );
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          // Stagger the animations
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const updated = [...prev];
                updated[i] = true;
                return updated;
              });
            }, i * delay);
          }
          
          setHasAnimated(true);
        } else if (!triggerOnce) {
          setVisibleItems(new Array(count).fill(false));
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [count, threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { containerRef, visibleItems };
}

// Hook for animating individual elements within a container
export function useElementScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.2, // Reduced threshold for faster triggering
    rootMargin = '0px 0px -60px 0px', // Reduced margin
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          } else {
            setIsVisible(true);
            setHasAnimated(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { elementRef, isVisible };
}

// Hook for multiple individual elements with different thresholds
export function useMultipleElementsAnimation(elementCount: number, options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.2, // Reduced threshold
    rootMargin = '0px 0px -40px 0px', // Reduced margin
    triggerOnce = true,
    staggerDelay = 100 // Reduced default stagger delay
  } = options;

  const [visibleElements, setVisibleElements] = useState<boolean[]>(
    new Array(elementCount).fill(false)
  );
  const elementRefs = useRef<(HTMLElement | null)[]>(new Array(elementCount).fill(null));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elementRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleElements(prev => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, index * staggerDelay);
          } else if (!triggerOnce) {
            setVisibleElements(prev => {
              const updated = [...prev];
              updated[index] = false;
              return updated;
            });
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [elementCount, threshold, rootMargin, triggerOnce, staggerDelay]);

  const setElementRef = (index: number) => (ref: HTMLElement | null) => {
    elementRefs.current[index] = ref;
  };

  return { visibleElements, setElementRef };
}

// Utility function to get animation class based on direction
export function getAnimationClass(
  direction: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' = 'up',
  isVisible: boolean = false,
  delay?: number
) {
  const visibleClass = isVisible ? 'visible' : '';
  
  let animationClass = '';
  
  switch (direction) {
    case 'up':
      animationClass = 'fade-in-on-scroll';
      break;
    case 'scale':
      animationClass = 'fade-in-scale-on-scroll';
      break;
    case 'fade':
      animationClass = 'fade-in-on-scroll';
      break;
    default:
      animationClass = 'fade-in-on-scroll';
  }
  
  const delayClass = delay ? `animation-delay-${delay}ms` : '';
  
  return `${animationClass} ${visibleClass} ${delayClass}`.trim();
}
