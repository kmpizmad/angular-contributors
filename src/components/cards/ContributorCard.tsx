'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useGetContributorName } from '@/hooks/api/useGetContributorName';
import { httpClient } from '@/lib/http';
import { ILocation } from '@/interfaces/entities/ILocation';

type ContributorCardProps = {
  imageUrl: string;
  repoUrl: string;
  name: string;
  tag: string;
  contributions: number;
  latitude?: number;
  longitude?: number;
};

export default function ContributorCard(props: ContributorCardProps) {
  const { data } = useGetContributorName(props.tag);

  const fetchGeolocation = useCallback(async () => {
    if (!data?.data.location) return;

    const geolocation = await httpClient.get<ILocation[]>(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(data?.data.location)}&format=json`
    );

    console.log(geolocation.data[0].lat, geolocation.data[0].lon);
  }, [data?.data.location]);

  return (
    <div className="flex flex-col max-w-xs gap-4 p-6 bg-white rounded-xl min-w-xs">
      <div className="flex items-start justify-between">
        <ContributorImage imageUrl={props.imageUrl} tag={props.tag} />
        <Image
          src="/compass.png"
          alt="compass.png"
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={() => fetchGeolocation()}
        />
      </div>
      <div>
        <div className="text-lg font-bold text-body">{data?.data.name || props.name}</div>
        <div className="text-base text-muted">{props.contributions} commits</div>
      </div>
      <div className="flex items-center justify-center">
        <Button className="uppercase transition-all bg-transparent border-2 rounded cursor-pointer border-primary text-primary hover:text-white">
          <Link href={`/${props.tag}/repos`} target="_blank">
            View Repositories
          </Link>
        </Button>
      </div>
    </div>
  );
}

function ContributorImage(props: { imageUrl: string; tag: string }) {
  return (
    <div className="flex items-end justify-start gap-3">
      <div className="flex items-center justify-center bg-contributor-image w-[72px] h-[72px]">
        <Image src={props.imageUrl} alt={props.tag} width={62} height={62} />
      </div>
      <div className="text-xs text-muted">{props.tag}</div>
    </div>
  );
}
