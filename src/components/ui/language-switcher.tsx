"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import countryLocaleData from "@/locales/countryData";
import { usePathname } from "next/navigation";
import locales from "@/config/locales";
import Link from "next/link";

/**
 * Extracts the locale from the URL path. Defaults to "en" if no locale is found.
 *
 * @returns The extracted locale or "en" if no locale is found.
 */
const getPathLocale = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  const locale =
    segments.length > 0 && locales.includes(segments[0]) ? segments[0] : "en";

  return locale;
};

/**
 * Switches the locale in the given pathname to the provided locale.
 *
 * @param pathname - The current URL path.
 * @param newLocale - The new locale to switch to.
 * @returns The modified pathname with the new locale.
 */
const switchPathLocale = (pathname: string, newLocale: string) => {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    // If the pathname is just "/", append the new locale.
    return `/${newLocale}`;
  } else if (locales.includes(segments[0])) {
    // Replace the existing locale with the new locale.
    segments[0] = newLocale;
    return `/${segments.join("/")}`;
  } else {
    // Prepend the new locale to the existing path.
    return `/${newLocale}/${segments.join("/")}`;
  }
};

export { getPathLocale, switchPathLocale };

export function LanguageSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(getPathLocale(pathname));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="justify-between pr-2"
        >
          {value.toLowerCase() == getPathLocale(pathname).toLowerCase()
            ? value.toUpperCase()
            : "EN"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search" />
          <CommandList>
            <CommandEmpty>No langauge found.</CommandEmpty>
            <CommandItem className="flex justify-center cursor-pointer">
              <Link
                href="https://github.com/Luzefiru/wuwatracker/tree/staging/src/locales"
                target="_blank"
                className="flex items-center text-muted-foreground hover:text-foreground"
              >
                We need translators
                <svg
                  className="ml-2 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </CommandItem>
            <CommandSeparator />
            <CommandGroup>
              {countryLocaleData.map((c) => (
                <CommandItem
                  key={c.value}
                  value={c.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  asChild
                >
                  <Link
                    href={switchPathLocale(pathname, c.value)}
                    className="flex"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === c.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {c.label}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
