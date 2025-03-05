'use client';

import RepositoryCard from '@/components/cards/RepositoryCard';
import useInfiniteRepos from '@/hooks/api/useInfiniteRepos';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

export default function RepositoryList({ tag }: { tag: string }) {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useInfiniteRepos(tag);
  const observerRef = useIntersectionObserver({
    observe: !isError,
    root: null,
    rootMargin: '200px',
    threshold: 0.05,
    onIntersect: () => fetchNextPage(),
  });

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 place-items-center">
        {data?.pages.flatMap(page =>
          page.data.map(repo => (
            <RepositoryCard
              key={`repository-${repo.id}`}
              name={repo.name}
              stars={repo.stargazers_count}
              isForked={repo.fork}
              lastUpdated={repo.updated_at}
            />
          ))
        )}
      </div>

      <div ref={observerRef} className="h-10 mb-10 text-center">
        <div
          className={cn('p-4 mx-auto border-2 rounded-lg w-max', {
            'bg-red-200 text-red-600 border-red-600': isError,
            'bg-green-200 text-green-600 border-green-600': !(isLoading || hasNextPage || isError),
          })}
        >
          {isError && (
            <div>
              Unexpected error occurred: <strong>{error.message}</strong>
            </div>
          )}
          {!(isLoading || hasNextPage || isError) && <div>You&apos;ve reached the end of the list</div>}
        </div>
        {(isLoading || isFetchingNextPage) && <div>Loading...</div>}
      </div>
    </>
  );
}
