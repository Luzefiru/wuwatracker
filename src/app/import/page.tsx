'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ImportTutorial } from '@/components/convenes/import-tutorial';

export default function Import() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col h-full w-full p-5 gap-3">
      <Button variant="outline" className="w-[10%] mb-3" onClick={handleBack}>
        Back
      </Button>
      <h2 className="text-2xl font-medium leading-none">
        Import Convene History
      </h2>
      <p className="text-muted-foreground">
        Note: This method is only confirmed to work with Windows 10 and above.
      </p>
      <ImportTutorial handleBack={handleBack} />
    </div>
  );
}
