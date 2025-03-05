'use client';

import useIntersectionObserver from '@/hooks/common/useIntersectionObserver';
import { cn } from '@/lib/utils';

type InfiniteScrollMessageProps = {
  error: Error | null;
  isLoading?: boolean;
  isFetchingNextPage?: boolean;
  isError?: boolean;
  hasNextPage?: boolean;
  onIntersect?: () => void;
};

export default function InfiniteScrollMessage(props: InfiniteScrollMessageProps) {
  const observerRef = useIntersectionObserver({
    observe: !props.isError,
    root: null,
    rootMargin: '1000px',
    threshold: 0.01,
    onIntersect: props.onIntersect,
  });

  return (
    <div
      ref={observerRef}
      className={cn('h-10 my-10 text-center', {
        'my-6': props.isLoading || props.isFetchingNextPage,
      })}
    >
      <div
        className={cn({
          'p-4 mx-auto border-2 rounded-lg w-max':
            !(props.isLoading || props.hasNextPage || props.isError) || props.isError,
          'bg-red-200 text-red-600 border-red-600': props.isError,
          'bg-green-200 text-green-600 border-green-600': !(props.isLoading || props.hasNextPage || props.isError),
        })}
      >
        {props.isError && (
          <div>
            Unexpected error occurred: <strong>{props.error?.message}</strong>
          </div>
        )}
        {!(props.isLoading || props.hasNextPage || props.isError) && <div>You&apos;ve reached the end of the list</div>}
      </div>
      {(props.isLoading || props.isFetchingNextPage) && <div>Loading...</div>}
    </div>
  );
}
