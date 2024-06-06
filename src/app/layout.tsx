import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PullHistoryContextProvider } from "@/contexts/pullHistoryContext";
import { UserContextProvider } from "@/contexts/userContext";
import env from "@/config/env";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(env.VERCEL_URL),
  title: "Wuwa Tracker",
  description:
    "A pity counter for Wuthering Waves, using the up-to-date data with global statistics and more. Share your pulls with your friends and track your account!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>
          <PullHistoryContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              disableTransitionOnChange
            >
              {children}
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
