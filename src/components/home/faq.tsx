import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function FAQ() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-screen-md w-full pb-8"
    >
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
          How do I know this website won&apos;t steal my data anyway?
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            Rest assured, we are players just like you and want to help
            Wuthering Waves grow by building useful tools for the all the Rovers
            in the world.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            If you want to make sure, this website is open source and you can
            view the code & scripts anytime at our{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="https://github.com/Luzefiru/wuwatracker"
            >
              GitHub repository
            </Link>
            .
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
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
            please{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="https://ko-fi.com/luzefiru"
            >
              create an issue in our GitHub repository
            </Link>
            .
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          How do I raise a bug report or suggest a feature?
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            You can{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="https://ko-fi.com/luzefiru"
            >
              create an issue in our GitHub repository
            </Link>{" "}
            using the proper template so that we can address your concern as
            soon as possible. Your contribution will help us create a better
            experience for our users, so we would greatly appreciate it!
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-none">
        <AccordionTrigger>How can I support this website?</AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            Thank you for using this website. As you continue to use it, you
            also inspire us to keep improving it.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            If you want to support us financially, we have a{" "}
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
