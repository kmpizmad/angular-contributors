import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { httpClient } from './http';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchPage<T>(url: string) {
  const response = await httpClient.get<T>(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  const paginationLinks = parseLinkHeader(response.headers.link);

  return {
    data: response.data,
    nextPage: paginationLinks.next ?? null,
    prevPage: paginationLinks.prev ?? null,
    firstPage: paginationLinks.first ?? null,
    lastPage: paginationLinks.last ?? null,
  };
}

export function parseLinkHeader(linkHeader: string) {
  if (!linkHeader) return {};

  const links: Record<string, number> = {};
  const linkParts = linkHeader.split(',');

  linkParts.forEach(part => {
    const match = part.match(/<([^>]+)>;\s*rel="([^"]+)"/);
    if (match) {
      const url = match[1];
      const rel = match[2];
      const urlObj = new URL(url);
      const page = Number(urlObj.searchParams.get('page'));
      links[rel] = page;
    }
  });

  return links;
}
