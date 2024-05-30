'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <div className="self-end">
      <Button
        variant="outline"
        size="lg"
        onClick={() => router.push("/import")}
      >
        Import
      </Button>
    </div>
  );
}
