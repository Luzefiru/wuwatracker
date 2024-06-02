"use client";
import { ModeToggle } from "./mode-toggle";
import * as React from "react";
import Link from "next/link";
import { Button } from "./button";
import { Sheet, SheetTrigger, SheetContent } from "./sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import getFirstConveneBannerHref from "@/lib/getFirstConveneBannerHref";

export function Header() {
  return (
    <header className="sticky top-0 flex py-1.5 items-center gap-4 border-b px-4 z-40 bg-background">
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
          href={getFirstConveneBannerHref()}
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
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
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
              href={getFirstConveneBannerHref()}
              className="text-muted-foreground hover:text-foreground"
            >
              History
            </Link>
            <Link
              href="/import"
              className="text-muted-foreground hover:text-foreground"
            >
              Import
            </Link>
            <Link
              href="/privacy-policy"
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
