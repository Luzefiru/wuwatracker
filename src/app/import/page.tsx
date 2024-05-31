'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ImportTutorial } from '@/components/convenes/import-tutorial';
import { ChevronLeft } from 'lucide-react';

export default function Import() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col h-full w-full gap-3">
      <div>
        <Button
          variant="outline"
          size="lg"
          className="mb-3 gap-2 pr-10"
          onClick={handleBack}
        >
          <ChevronLeft className="h-5 w-5" /> Back
        </Button>
      </div>
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
        Import Convene History
      </h2>
      <p className="text-muted-foreground">
        Note: This method is only confirmed to work with Windows 10 and above.
      </p>
      <ImportTutorial handleBack={handleBack} />
    </div>
  );
}
