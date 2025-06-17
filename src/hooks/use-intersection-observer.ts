import * as React from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = "0px",
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) {
  const [ref, setRef] = React.useState<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  const frozen = React.useRef(false);

  const onIntersect = React.useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const isVisible = entry.isIntersecting;

      if (isVisible && freezeOnceVisible) {
        frozen.current = true;
        setIsIntersecting(true);
        return;
      }

      if (frozen.current) return;

      setIsIntersecting(entry.isIntersecting);
    },
    [freezeOnceVisible]
  );

  React.useEffect(() => {
    if (!ref) return;
    if (frozen.current) return;

    const observer = new IntersectionObserver(onIntersect, {
      threshold,
      rootMargin,
    });

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, onIntersect]);

  return { ref: setRef, isIntersecting };
} 