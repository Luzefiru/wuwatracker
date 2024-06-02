import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="max-w-screen-md w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Do you store my data when I import my history?
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            No, your URL is only saved to your web browser. Clearing your
            browser data on this website will delete your stored data. If you
            want to check your history, you&apos;ll need to import it again.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            More information regarding our data collection can be found in our{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="/privacy-policy"
            >
              Privacy Policy page.
            </Link>
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          My history is not automatically updating, what&apos;s wrong?
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            Just like in-game, your history does not instantly update. Try
            checking again later to see if your history is updated, otherwise it
            could be a bug.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            If you suspect that there&apos;s something wrong with this website,
            please create a{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="https://github.com/Luzefiru/wuwatracker/issues"
            >
              GitHub Issue
            </Link>{" "}
            on our repository.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-none">
        <AccordionTrigger>
          I&apos;d like to support this website. How can I do that?
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            Thank you for using our website. As of the moment, our GitHub
            repository is not yet open to the public as we are creating some
            essential features. So stay tuned for that if you would like to help
            us develop.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            Otherwise, we have a{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="https://ko-fi.com/luzefiru"
            >
              Ko-fi page
            </Link>{" "}
            to accept any donations to keep the website running!
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
