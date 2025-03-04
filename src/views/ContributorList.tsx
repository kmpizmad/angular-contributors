'use client';

import ContributorCard from '@/components/cards/ContributorCard';
import useInfiniteContributors from '@/hooks/useInfiniteContributors';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export default function ContributorList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useInfiniteContributors();
  const observerRef = useIntersectionObserver({
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
        {(isLoading || isFetchingNextPage) && <div>Loading...</div>}
        {!(isLoading || hasNextPage) && <div>You&apos;ve reached the end of the list</div>}
        {isError && <div>Unexpected error occurred</div>}
      </div>
    </>
  );
}
