'use client';

import { useRef, useEffect } from 'react';

type UseIntersectionObserverProps = IntersectionObserverInit & {
  onIntersect?: () => void;
};

export default function useIntersectionObserver(props: UseIntersectionObserverProps) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = observerRef.current;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && props.onIntersect) {
          props.onIntersect();
        }
      },
      {
        root: props.root,
        rootMargin: props.rootMargin,
        threshold: props.threshold,
      }
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [props, props.onIntersect]);

  return observerRef;
}
