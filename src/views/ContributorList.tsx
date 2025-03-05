'use client';

import ContributorCard from '@/components/cards/ContributorCard';
import InfiniteScrollMessage from '@/components/common/InfiniteScrollMessage';
import useInfiniteContributors from '@/hooks/api/useInfiniteContributors';

export default function ContributorList() {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useInfiniteContributors();

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
      <InfiniteScrollMessage
        error={error}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        isError={isError}
        onIntersect={fetchNextPage}
      />
    </>
  );
}
