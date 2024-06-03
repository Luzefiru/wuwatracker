import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Wuwa Tracker",
  description:
    "This privacy policy document outlines the types of personal information that is received and collected by Wuwa Tracker and how it is used. Wuwa Tracker is a pity counter for Wuthering Waves, using the up-to-date data with global statistics and more.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center h-full w-full gap-16 py-8">
      <div className="flex flex-col sm:text-start max-w-screen-md">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="leading-7 dark:text-muted-foreground [&:not(:first-child)]:mt-4">
            Your privacy is critically important to us. This privacy policy
            document outlines the types of personal information that is received
            and collected by Wuwa Tracker and how it is used.
          </p>
        </div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Browser Local Storage
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          Wuwa Tracker uses browser local storage to store application data.
          Local storage allows us to store data locally on your device to
          provide a more seamless and responsive user experience.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          The data stored in the browser&apos;s local storage is used to keep
          track of your preferences and settings, which helps in delivering a
          personalized experience whenever you use our application. This data is
          stored locally on your device and is not transmitted to our servers.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          By using Wuwa Tracker, you consent to the use of local storage for
          storing application data. You can clear your browser&apos;s local
          storage at any time through your browser settings, which will remove
          any stored data associated with Wuwa Tracker.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Analytics
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          Wuwa Tracker uses Vercel Analytics to collect and analyze data about
          how our application is used. This information helps us understand user
          behavior, improve our application, and enhance user experience.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          Vercel Analytics collects data such as page views, clicks, and other
          interactions within the application. This data is anonymized and
          aggregated, meaning it does not personally identify individual users.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          By using Wuwa Tracker, you agree to the collection and use of
          information by Vercel Analytics for the purpose of improving our
          application. The data collected through Vercel Analytics is used
          solely for analytics purposes and is not shared with third parties.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Changes to This Privacy Policy
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 dark:text-muted-foreground">
          We may update our Privacy Policy from time to time. You are advised to
          review this Privacy Policy periodically for any changes. Changes to
          this Privacy Policy are effective when they are posted on this page.
        </p>
      </div>
    </div>
  );
}
