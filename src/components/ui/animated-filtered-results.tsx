'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedFilteredResultsProps {
  children: ReactNode[];
  className?: string;
}

export function AnimatedFilteredResults({ 
  children, 
  className = ''
}: AnimatedFilteredResultsProps) {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className="opacity-0 transition-opacity duration-500 opacity-100"
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
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn('opacity-0 transition-opacity duration-500 opacity-100', className)}
    >
      {children}
    </div>
  );
}
