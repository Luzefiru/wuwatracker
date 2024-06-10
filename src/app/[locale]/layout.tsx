import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PullHistoryContextProvider } from "@/contexts/pullHistoryContext";
import { UserContextProvider } from "@/contexts/userContext";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import env from "@/config/env";
import locales from "@/config/locales";
import { unstable_setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(env.VERCEL_URL),
  title: "Wuwa Tracker",
  description:
    "A pity counter for Wuthering Waves, using the up-to-date data with global statistics and more. Synchronize your data across devices and share your pulls with your friends and track your account easily!",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <UserContextProvider>
          <PullHistoryContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              disableTransitionOnChange
            >
              <NextIntlClientProvider messages={messages}>
                {children}
              </NextIntlClientProvider>
            </ThemeProvider>
            <Toaster richColors />
            <Analytics />
            <SpeedInsights />
          </PullHistoryContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
