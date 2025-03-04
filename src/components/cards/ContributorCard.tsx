'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
  return (
    <div className="flex flex-col max-w-xs gap-4 p-6 bg-white rounded-xl">
      <div className="flex items-start justify-between">
        <ContributorImage imageUrl={props.imageUrl} tag={props.tag} />
        <Image
          src="/compass.png"
          alt="compass.png"
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={() => console.log(props.latitude, props.longitude)}
        />
      </div>
      <div>
        <div className="text-lg font-bold text-body">{props.name}</div>
        <div className="text-base text-muted">{props.contributions} commits</div>
      </div>
      <div className="flex items-center justify-center">
        <Button className="uppercase transition-all bg-transparent border-2 rounded cursor-pointer border-primary text-primary hover:text-white">
          View Repositories
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
