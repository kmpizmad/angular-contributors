'use client';

import { IContributor } from '@/interfaces/entities/IContributor';
import { fetchPage } from '@/lib/utils';
import { useInfiniteQuery } from '@tanstack/react-query';

export default function useInfiniteContributors() {
  return useInfiniteQuery({
    queryKey: ['contributors'],
    queryFn: ({ pageParam }) =>
      fetchPage<IContributor[]>(
        `https://api.github.com/repos/angular/angular/contributors?page=${pageParam}&per_page=15`
      ),
    initialPageParam: 1,
    getNextPageParam: page => page.nextPage,
    getPreviousPageParam: page => page.prevPage,
    retry: 5,
    retryDelay: 3000,
    retryOnMount: false,
  });
}
