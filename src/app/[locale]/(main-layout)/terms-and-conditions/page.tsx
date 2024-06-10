import { Metadata } from "next";
import Link from "next/link";
import { unstable_setRequestLocale } from "next-intl/server";

export default function TermsAndConditions({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex flex-col items-center h-full w-full gap-16 py-8">
      <div className="flex flex-col sm:text-start max-w-screen-md">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Terms & Conditions
          </h1>
          <p className="leading-7 dark:text-muted-foreground [&:not(:first-child)]:mt-4">
            These terms and conditions outline the rules and regulations for the
            use of Wuwa Tracker&apos;s website and services.
          </p>
        </div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Acceptance of Terms
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          By using our website, you agree to comply with and be bound by the
          following terms and conditions. Please review these terms carefully.
          If you do not agree with these terms, you should not use our website.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          By accessing and using Wuwa Tracker, you accept and agree to be bound
          by the terms and provision of this agreement. In addition, when using
          Wuwa Tracker&apos;s services, you shall be subject to any posted
          guidelines or rules applicable to such services.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Changes to Terms
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          We reserve the right to update or modify these terms at any time
          without prior notice. Your continued use of the app after any such
          changes constitutes your acceptance of the new terms and conditions.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          User Accounts
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          To use certain features of our app, you may be required to create an
          account using Google OAuth to access our cloud sync feature.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Privacy Policy
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          Your use of Wuwa Tracker is also governed by our{" "}
          <Link
            className="text-yellow-500 hover:text-yellow-600"
            href="/privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </Link>
          . Please review our Privacy Policy, which explains how we collect,
          use, and protect your information. By using our app, you consent to
          the practices described in the Privacy Policy.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          User Conduct
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          You agree to use the app only for lawful purposes and in a way that
          does not infringe the rights of, restrict, or inhibit anyone
          else&apos;s use and enjoyment of the app. Prohibited behavior includes
          harassing or causing distress or inconvenience to any other user,
          transmitting obscene or offensive content, or disrupting the normal
          flow of dialogue within our app.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Intellectual Property
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          All content, trademarks, service marks, trade names, logos, and icons
          are the property of their respective owners and/or its licensors and
          are protected by copyright and other intellectual property laws.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Limitation of Liability
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          Wuwa Tracker will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or
          revenues, whether incurred directly or indirectly, or any loss of
          data, use, goodwill, or other intangible losses, resulting from your
          use of the app.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          Additionally, Wuwa Tracker is not liable for any account bans or other
          related issues that may occur as a result of using our website, as we
          are an external service and are not officially associated with
          Wuthering Waves in any way.
        </p>
      </div>
    </div>
  );
}
