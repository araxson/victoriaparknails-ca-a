'use client';

import { ReactNode, forwardRef, ElementType } from 'react';
import { 
  useScrollAnimation, 
  useStaggeredScrollAnimation, 
  useElementScrollAnimation, 
  useMultipleElementsAnimation 
} from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  as?: ElementType;
}

export const AnimatedElement = forwardRef<HTMLElement, AnimatedElementProps>(
  ({ 
    children, 
    className = '', 
    animation = 'slideUp',
    delay = 0,
    threshold = 0.1,
    triggerOnce = true,
    as: Component = 'div'
  }, ref) => {    const { elementRef, isVisible } = useScrollAnimation({
      threshold,
      delay,
      triggerOnce,
      rootMargin: '0px 0px -30px 0px' // Reduced for faster triggering
    });

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
      <Component
        ref={ref || elementRef}
        className={cn(
          getAnimationClasses(),
          isVisible && 'visible',
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

AnimatedElement.displayName = 'AnimatedElement';

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
  childCount?: number;
  threshold?: number;
  triggerOnce?: boolean;
  as?: ElementType;
}

export const AnimatedContainer = forwardRef<HTMLElement, AnimatedContainerProps>(
  ({ 
    children, 
    className = '',
    stagger = false,
    staggerDelay = 100,
    childCount = 0,
    threshold = 0.1,
    triggerOnce = true,
    as: Component = 'div'
  }, ref) => {    const { containerRef, visibleItems } = useStaggeredScrollAnimation(
      childCount,
      {
        threshold,
        triggerOnce,
        delay: staggerDelay,
        rootMargin: '0px 0px -30px 0px' // Reduced for faster triggering
      }
    );

    if (stagger && childCount > 0) {
      return (
        <Component
          ref={ref || containerRef}
          className={cn('stagger-container', className)}
        >
          {Array.isArray(children) 
            ? children.map((child, index) => (
                <div
                  key={index}
                  className={cn(
                    'fade-in-on-scroll',
                    visibleItems[index] && 'visible'
                  )}
                >
                  {child}
                </div>
              ))
            : children
          }
        </Component>
      );
    }

    return (
      <Component
        ref={ref}
        className={className}
      >
        {children}
      </Component>
    );
  }
);

AnimatedContainer.displayName = 'AnimatedContainer';

// Individual animated component for detailed elements
export const AnimatedDetail = forwardRef<HTMLElement, AnimatedElementProps>(
  ({ 
    children, 
    className = '', 
    animation = 'slideUp',
    delay = 0,
    threshold = 0.2, // Reduced threshold for faster triggering
    triggerOnce = true,
    as: Component = 'div'
  }, ref) => {
    const { elementRef, isVisible } = useElementScrollAnimation({
      threshold,
      delay,
      triggerOnce,
      rootMargin: '0px 0px -40px 0px' // Reduced margin for faster triggering
    });

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
      <Component
        ref={ref || elementRef}
        className={cn(
          getAnimationClasses(),
          isVisible && 'visible',
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

AnimatedDetail.displayName = 'AnimatedDetail';

// Animation component specifically for card content with separate interface
interface AnimatedCardItemProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'scale' | 'rotate';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  as?: ElementType;
}

export const AnimatedCardItem = forwardRef<HTMLElement, AnimatedCardItemProps>(
  ({ 
    children, 
    className = '', 
    animation = 'fade', 
    delay = 0,
    threshold = 0.15, // Lower threshold for card items for quicker animation
    triggerOnce = true,
    as: Component = 'div'
  }, ref) => {
    const { elementRef, isVisible } = useElementScrollAnimation({
      threshold,
      delay,
      triggerOnce,
      rootMargin: '0px 0px -30px 0px' // Optimized for card items
    });

    const getAnimationClasses = () => {
      switch (animation) {
        case 'scale':
          return 'card-item-scale-on-scroll';
        case 'rotate':
          return 'card-item-scale-on-scroll'; // Using scale for rotate since we don't have a dedicated class
        case 'fade':
        default:
          return 'card-item-fade-on-scroll';
      }
    };

    return (
      <Component
        ref={ref || elementRef}
        className={cn(
          getAnimationClasses(),
          isVisible && 'visible',
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

AnimatedCardItem.displayName = 'AnimatedCardItem';

// Component for lists where each item animates individually
export function AnimatedList({ 
  children, 
  className = '',
  itemDelay = 80, // Reduced delay for faster animations
  itemThreshold = 0.3, // Slightly reduced threshold
  as: Component = 'div'
}: {
  children: ReactNode[];
  className?: string;
  itemDelay?: number;
  itemThreshold?: number;
  as?: ElementType;
}) {
  const childrenArray = Array.isArray(children) ? children : [children];
  const { visibleElements, setElementRef } = useMultipleElementsAnimation(
    childrenArray.length,
    {
      threshold: itemThreshold,
      staggerDelay: itemDelay,
      rootMargin: '0px 0px -40px 0px' // Reduced for faster triggering
    }
  );

  return (
    <Component className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          ref={setElementRef(index)}
          className={cn(
            'fade-in-on-scroll',
            visibleElements[index] && 'visible'
          )}
        >
          {child}
        </div>
      ))}
    </Component>
  );
}

// Pre-built professional components for common use cases

export function AnimatedSection({ 
  children, 
  className = '',
  ...props 
}: AnimatedElementProps) {
  return (
    <AnimatedElement
      as="section"
      className={cn('py-16 lg:py-24', className)}
      animation="slideUp"
      threshold={0.2}
      {...props}
    >
      {children}
    </AnimatedElement>
  );
}

export function AnimatedHeading({ 
  children, 
  className = '',
  level = 2,
  ...props 
}: AnimatedElementProps & { level?: 1 | 2 | 3 | 4 | 5 | 6 }) {
  const HeadingComponent = `h${level}` as ElementType;
  
  return (
    <AnimatedElement
      as={HeadingComponent}
      className={cn('mb-6', className)}
      animation="slideUp"
      threshold={0.3}
      {...props}
    >
      {children}
    </AnimatedElement>
  );
}

export function AnimatedCard({ 
  children, 
  className = '',
  ...props 
}: AnimatedElementProps) {
  return (
    <AnimatedElement
      className={cn(
        'bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700',
        className
      )}
      animation="scale"
      threshold={0.2}
      {...props}
    >
      {children}
    </AnimatedElement>
  );
}

export function AnimatedGrid({ 
  children, 
  className = '',
  columns = 3,
  ...props 
}: AnimatedContainerProps & { columns?: number }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  
  return (
    <AnimatedContainer
      className={cn(
        `grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns}`,
        className
      )}
      stagger={true}
      staggerDelay={150}
      childCount={childrenArray.length}
      threshold={0.1}
      {...props}
    >
      {children}
    </AnimatedContainer>
  );
}

export function AnimatedTextBlock({ 
  children, 
  className = '',
  ...props 
}: AnimatedElementProps) {
  return (
    <AnimatedElement
      className={cn('prose prose-lg max-w-none', className)}
      animation="slideUp"
      threshold={0.2}
      delay={200}
      {...props}
    >
      {children}
    </AnimatedElement>
  );
}
