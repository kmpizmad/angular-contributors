'use client';

import { IUser } from '@/interfaces/entities/IUser';
import { httpClient } from '@/lib/http';
import { useQuery } from '@tanstack/react-query';

export function useGetContributorName(tag: string) {
  return useQuery({
    queryKey: [`contributor-${tag}`],
    queryFn: () => httpClient.get<IUser>(`https://api.github.com/users/${tag}`),
  });
}
