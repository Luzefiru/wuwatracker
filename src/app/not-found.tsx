import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex justify-center h-[80vh] lg:h-auto lg:py-12">
      <section className="flex flex-col items-center justify-center h-full px-8 desktop:px-0 max-w-screen-lg text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Whoops! <br />
          Are you lost, <span className="text-yellow-500">Rover</span>?
        </h1>
        <Image
          className="object-cover mask-gradient-to-b"
          src="https://cdn.wanderer.moe/wuthering-waves/emotes/T_ChatEmo_A_06.png"
          width="360"
          height="450"
          alt="404: Page Not Found"
        />
        <p className="leading-7 text-sm sm:text-lg text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild variant="default" size="lg">
          <Link href="/">
            <Home className="w-4 h-4 mr-2" /> Go Home
          </Link>
        </Button>
      </section>
    </div>
  );
}
