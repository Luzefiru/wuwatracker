import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Wuwa Tracker | Settings",
  description:
    "Synchronize your data over Google by signing in. Manage your data all in one place. Wuwa Tracker pity counter for Wuthering Waves, using the up-to-date data with global statistics and more. Share your pulls with your friends and track your account!",
};

export default function SettingsLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex mx-auto w-full flex-col gap-4 md:gap-8 max-w-screen-lg">
      {children}
    </div>
  );
}
