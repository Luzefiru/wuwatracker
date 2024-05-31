import { Button } from '../ui/button';
import Link from 'next/link';
import { Import } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-center">
        Convene Tracker
      </h2>
      <div className="flex justify-around md:justify-end w-full md:w-auto">
        <Button asChild variant="default" size="lg">
          <Link href="/import">
            <Import className="mr-2 h-4 w-4" /> Import
          </Link>
        </Button>
      </div>
    </div>
  );
}
