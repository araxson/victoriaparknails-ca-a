"use client";

import * as React from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface AnimatedCounterProps {
  value: number | string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1500,
  className = "",
}: AnimatedCounterProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "-50px",
  });
  
  const [count, setCount] = React.useState(0);
  
  // Parse the numeric part from the value 
  const getNumericValue = React.useCallback(() => {
    if (typeof value === "number") return value;
    
    // Extract numeric part from string (e.g., "100+" becomes 100)
    const numericMatch = value.match(/\d+/);
    return numericMatch ? parseInt(numericMatch[0], 10) : 0;
  }, [value]);
  
  const targetValue = getNumericValue();
  
  React.useEffect(() => {
    if (!isIntersecting) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * targetValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isIntersecting, targetValue, duration]);
  
  return (
    <span ref={ref} className={className}>
      {prefix}
      {isIntersecting ? count : 0}
      {suffix}
    </span>
  );
} 