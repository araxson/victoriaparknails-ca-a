'use client';

import { ReactNode, ElementType, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'pulse' | 'float';
  delay?: number;
}

export function AnimatedElement({
  children,
  className = '',
  as: Component = 'div',
  animation = 'fadeIn',
  delay = 0
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeIn':
        return 'motion-safe:animate-fadeIn';
      case 'slideUp':
        return 'motion-safe:animate-slideUp';
      case 'slideDown':
        return 'motion-safe:animate-slideDown';
      case 'slideLeft':
        return 'motion-safe:animate-slideLeft';
      case 'slideRight':
        return 'motion-safe:animate-slideRight';
      case 'scale':
        return 'motion-safe:animate-scale';
      case 'pulse':
        return 'motion-safe:animate-pulse';
      case 'float':
        return 'motion-safe:animate-float';
      default:
        return 'motion-safe:animate-fadeIn';
    }
  };

  return (
    <Component
      className={cn(
        'opacity-0',
        isVisible && getAnimationClass(),
        className
      )}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </Component>
  );
}

AnimatedElement.displayName = 'AnimatedElement';

export function AnimatedContainer({
  children,
  className = '',
  as: Component = 'div'
}: AnimatedElementProps) {
  return (
    <Component
      className={className}
    >
      {children}
    </Component>
  );
}

AnimatedContainer.displayName = 'AnimatedContainer';

export function AnimatedDetail({
  children,
  className = '',
  as: Component = 'div',
  animation = 'fadeIn',
  delay = 0
}: AnimatedElementProps) {
  return (
    <AnimatedElement 
      className={className}
      as={Component}
      animation={animation}
      delay={delay}
    >
      {children}
    </AnimatedElement>
  );
}

AnimatedDetail.displayName = 'AnimatedDetail';

export function AnimatedCardItem({
  children,
  className = '',
  as: Component = 'div',
  animation = 'fadeIn',
  delay = 0
}: AnimatedElementProps) {
  return (
    <AnimatedElement
      className={className}
      as={Component}
      animation={animation}
      delay={delay}
    >
      {children}
    </AnimatedElement>
  );
}

AnimatedCardItem.displayName = 'AnimatedCardItem';

export function AnimatedList({ 
  children, 
  className = '',
  as: Component = 'div'
}: {
  children: ReactNode[];
  className?: string;
  as?: ElementType;
}) {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <Component className={className}>
      {childrenArray.map((child, index) => (
        <AnimatedElement
          key={index}
          delay={index * 100}
          animation="slideUp"
        >
          {child}
        </AnimatedElement>
      ))}
    </Component>
  );
}

export function AnimatedImage({
  children,
  className = '',
  as: Component = 'div',
  animation = 'fadeIn',
  delay = 0
}: AnimatedElementProps) {
  return (
    <AnimatedElement
      className={className}
      as={Component}
      animation={animation}
      delay={delay}
    >
      {children}
    </AnimatedElement>
  );
}

export function AnimatedHeading({ 
  children, 
  className = '',
  level = 2,
  animation = 'slideUp',
  delay = 0
}: AnimatedElementProps & { level?: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const HeadingComponent = `h${level}` as ElementType;
  
  return (
    <AnimatedElement
      as={HeadingComponent}
      className={cn('mb-6', className)}
      animation={animation}
      delay={delay}
    >
      {children}
    </AnimatedElement>
  );
}

export function AnimatedCard({ 
  children, 
  className = '',
  animation = 'fadeIn',
  delay = 0
}: AnimatedElementProps) {
  return (
    <AnimatedElement
      className={cn(
        'bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700',
        className
      )}
      animation={animation}
      delay={delay}
    >
      {children}
    </AnimatedElement>
  );
}

export function AnimatedSection({ 
  children, 
  className = '',
  animation = 'fadeIn',
  delay = 0
}: AnimatedElementProps) {
  return (
    <AnimatedElement
      as="section"
      className={cn('py-12 md:py-16', className)}
      animation={animation}
      delay={delay}
    >
      {children}
    </AnimatedElement>
  );
}

export function AnimatedTextBlock({ 
  children, 
  className = '',
  animation = 'fadeIn',
  delay = 0
}: AnimatedElementProps) {
  return (
    <AnimatedElement
      className={cn('prose prose-lg max-w-none', className)}
      animation={animation}
      delay={delay}
    >
      {children}
    </AnimatedElement>
  );
}
