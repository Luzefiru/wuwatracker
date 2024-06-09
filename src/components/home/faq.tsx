import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function FAQ() {
  const t = useTranslations("LandingPage.FAQ");

  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-screen-md w-full pb-8 px-4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-start">
          {t("Where is my data being stored when I import?")}
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            {t("Your URL is only saved to your web browser")}.{" "}
            {t(
              "Clearing your browser data on this website will delete your stored data",
            )}
            .{" "}
            {t(
              "If you want to check your history, you'll need to import it again",
            )}
            .
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            {t(
              "You also have to option to safely backup your URL using your Google Account inside the",
            )}{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="/settings"
              target="_blank"
            >
              {t("Settings page")}
            </Link>
            .
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            {t(
              "More information regarding our data collection can be found in our",
            )}{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="/privacy-policy"
              target="_blank"
            >
              {t("Privacy Policy page")}
            </Link>
            .
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-start">
          {t("How do I know this website won't steal my data?")}
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            {t(
              "Rest assured, we are players just like you and want to help Wuthering Waves grow by building useful tools for the all the Rovers in the world",
            )}
            .
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            {t(
              "If you want to make sure, this website is open source and you can view the code & scripts anytime at our",
            )}{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="https://github.com/Luzefiru/wuwatracker"
              target="_blank"
            >
              {t("GitHub repository")}
            </Link>
            .
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-start">
          {t("My history is not automatically updating, what's wrong?")}
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            {t("Just like in-game, your history does not instantly update")}.{" "}
            {t(
              "Try checking again later to see if your history is updated, otherwise it could be a bug",
            )}
            .
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            {t(
              "If you suspect that there's something wrong with this website, please",
            )}{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="https://ko-fi.com/luzefiru"
              target="_blank"
            >
              {t("create an issue in our GitHub repository")}
            </Link>
            .
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-start">
          {t("How do I raise a bug report or suggest a feature?")}
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            {t("You can")}{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="https://ko-fi.com/luzefiru"
              target="_blank"
            >
              {t("create an issue in our GitHub repository")}
            </Link>{" "}
            {t(
              "using the proper template so that we can address your concern as soon as possible",
            )}
            .{" "}
            {t(
              "Your contribution will help us create a better experience for our users, so we would greatly appreciate it!",
            )}
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="border-none">
        <AccordionTrigger className="text-start">
          {t("How can I support this website?")}
        </AccordionTrigger>
        <AccordionContent>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            {t("Thank you for using this website")}.{" "}
            {t(
              "As you continue to use it, you also inspire us to keep improving it",
            )}
            .
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            {t("If you want to support us financially, we have a")}{" "}
            <Link
              className="text-yellow-500 hover:text-yellow-600"
              href="https://ko-fi.com/luzefiru"
              target="_blank"
            >
              {t("Ko-fi page")}
            </Link>{" "}
            {t("to accept any donations to keep the website running!")}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
