"use client";

import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { Button } from "./button";
import { Sheet, SheetTrigger, SheetContent } from "./sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import getFirstConveneBannerHref from "@/lib/getFirstConveneBannerHref";
import { SettingsDropdownButton } from "./settings-dropdown-button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const pathName = usePathname();

  /**
   * Checks if the `href` is the current `pathName`, if so, give it active link classes.
   */
  const getLinkClassName = (href: string) => {
    return cn(
      "transition-colors hover:text-foreground",
      href === pathName ? "text-foreground" : "text-muted-foreground ",
    );
  };

  return (
    <header className="sticky top-0 flex py-1.5 items-center gap-4 border-b px-2 md:px-4 z-40 bg-background">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <div className="aspect-square relative w-14">
            <Image
              className="object-cover invert dark:invert-0"
              src="/icons/convene-icon.png"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              alt="Wuwa Tracker"
            />
          </div>

          <span className="sr-only">Wuwa Tracker</span>
        </Link>
        <Link
          href={getFirstConveneBannerHref()}
          className={getLinkClassName(getFirstConveneBannerHref())}
        >
          History
        </Link>
        <Link href="/import" className={getLinkClassName("/import")}>
          Import
        </Link>
        <Link href="/sequences" className={getLinkClassName("/sequences")}>
          Sequences
        </Link>
        <Link href="/settings" className={getLinkClassName("/settings")}>
          Settings
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
                  fill
                  alt="Wuwa Tracker"
                />
              </div>
              <span className="sr-only">Wuwa Tracker</span>
            </Link>
            <Link
              href={getFirstConveneBannerHref()}
              className={getLinkClassName(getFirstConveneBannerHref())}
            >
              History
            </Link>
            <Link href="/import" className={getLinkClassName("/import")}>
              Import
            </Link>
            <Link href="/settings" className={getLinkClassName("/settings")}>
              Settings
            </Link>
            <Link
              href="/privacy-policy"
              className={getLinkClassName("/privacy-policy")}
            >
              Privacy Policy
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <span className="ms-auto flex gap-2">
        <ModeToggle />
        <SettingsDropdownButton />
      </span>
    </header>
  );
}
