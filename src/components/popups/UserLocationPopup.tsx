'use client';

import Image from 'next/image';
import SimpleMap from '@/components/maps/SimpleMap';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type UserLocationPopupProps = {
  location: string;
};

export default function UserLocationPopup(props: UserLocationPopupProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Image src="/compass.png" alt="compass.png" width={32} height={32} className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent side="right" align="start" alignOffset={-50} className="max-w-full w-md">
        <SimpleMap location={props.location} />
      </PopoverContent>
    </Popover>
  );
}
