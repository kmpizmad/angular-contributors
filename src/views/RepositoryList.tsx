'use client';

import RepositoryCard from '@/components/cards/RepositoryCard';
import InfiniteScrollMessage from '@/components/common/InfiniteScrollMessage';
import useInfiniteRepos from '@/hooks/api/useInfiniteRepos';

export default function RepositoryList({ tag }: { tag: string }) {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useInfiniteRepos(tag);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 place-items-center">
        {data?.pages.flatMap(page =>
          page.data.map(repo => (
            <RepositoryCard
              key={`repository-${repo.id}`}
              url={repo.clone_url}
              name={repo.name}
              stars={repo.stargazers_count}
              isForked={repo.fork}
              lastUpdated={repo.updated_at}
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
