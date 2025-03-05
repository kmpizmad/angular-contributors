'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button className="uppercase transition-all cursor-pointer" onClick={() => router.back()}>
      <ArrowLeft /> Go Back
    </Button>
  );
}
