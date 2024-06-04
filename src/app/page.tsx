import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import getFirstConveneBannerHref from "@/lib/getFirstConveneBannerHref";
import { Spotlight } from "@/components/ui/spotlight";
import { FAQ } from "@/components/home/faq";

export default function LandingPage() {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
          <a
            href="https://github.com/Luzefiru/wuwatracker"
            className="font-medium inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm dark:border-none border dark:bg-accent bg-background rounded-full"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-muted-foreground px-2.5 py-1.5">
              v1.1.0
            </span>
            <span className="text-sm">Wuwa Tracker</span>
            <svg
              className="ml-3 w-4 h-4"
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
          </a>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Track your Convene History
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
          </h1>
          <p className="mb-8 leading-7 [&:not(:first-child)]:mt-6">
            Wuwa Tracker makes counting your pity easy. Once you set it up, your
            statistics will automatically refresh whenever you pull.
          </p>

          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Button size="lg" asChild>
              <Link href="/import">Import Tutorial</Link>
            </Button>
            <Button size="lg" asChild variant="ghost">
              <Link href={getFirstConveneBannerHref()}>
                Go to History <ArrowRight className="ml-2 h-5 w-5" />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <FAQ />
      </section>
    </>
  );
}
