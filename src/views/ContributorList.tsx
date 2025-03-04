'use client';

import ContributorCard from '@/components/cards/ContributorCard';
import useInfiniteContributors from '@/hooks/api/useInfiniteContributors';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

export default function ContributorList() {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useInfiniteContributors();
  const observerRef = useIntersectionObserver({
    observe: !isError,
    root: null,
    rootMargin: '200px',
    threshold: 0.05,
    onIntersect: () => fetchNextPage(),
  });

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
        {data?.pages.flatMap(page =>
          page.data.map(contributor => (
            <ContributorCard
              key={`contributor-${contributor.id}`}
              imageUrl={contributor.avatar_url}
              repoUrl={contributor.repos_url}
              name={contributor.login}
              tag={contributor.login}
              contributions={contributor.contributions}
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
          {isError && `Unexpected error occurred: ${error.message}`}
          {!(isLoading || hasNextPage || isError) && "You've reached the end of the list"}
        </div>
        {(isLoading || isFetchingNextPage) && <div>Loading...</div>}
      </div>
    </>
  );
}
