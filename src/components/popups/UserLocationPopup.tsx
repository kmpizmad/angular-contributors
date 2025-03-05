'use client';

import Image from 'next/image';
import SimpleMap from '@/components/maps/SimpleMap';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useMediaQuery } from '@/hooks/common/useMediaQuery';

type UserLocationPopupProps = {
  location: string;
};

export default function UserLocationPopup(props: UserLocationPopupProps) {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Image src="/compass.png" alt="compass.png" width={32} height={32} className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent
        side={isMobile ? 'bottom' : 'right'}
        align={isMobile ? 'end' : 'start'}
        alignOffset={isMobile ? -40 : -50}
        className="w-[350px] max-w-full sm:w-md"
      >
        <SimpleMap location={props.location} />
      </PopoverContent>
    </Popover>
  );
}
