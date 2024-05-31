'use client';
import { ModeToggle } from './mode-toggle';
import * as React from 'react';
import Link from 'next/link';
import { Package2 } from 'lucide-react';
import { Button } from './button';
import { Sheet, SheetTrigger, SheetContent } from './sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b px-2 z-40 opacity-[0.97] bg-background mb-10">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <div className="aspect-square relative w-14">
            <Image
              className="object-cover invert dark:invert-0"
              src="/icons/convene-icon.png"
              layout="fill"
              alt="Wuwa Tracker"
            />
          </div>

          <span className="sr-only">Wuwa Tracker</span>
        </Link>
        <Link
          href="/"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          History
        </Link>
        <Link
          href="/import"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Import
        </Link>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <div className="aspect-square relative w-14">
                <Image
                  className="object-cover"
                  src="/icons/convene-icon.png"
                  layout="fill"
                  alt="Wuwa Convene Tracker"
                />
              </div>
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Tracker
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <span className="ms-auto">
        <ModeToggle />
      </span>
    </header>
  );
}
