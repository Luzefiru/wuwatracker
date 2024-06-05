import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PullHistoryContextProvider } from "@/contexts/pullHistoryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
        <PullHistoryContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <div className="flex min-h-screen w-full flex-col relative bg-accent dark:bg-transparent">
              <Header />
              <main className="flex justify-center w-full h-full my-10">
                <div className="w-full h-full px-3 sm:px-10 max-w-screen-desktop grid">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </ThemeProvider>
          <Toaster richColors />
          <Analytics />
          <SpeedInsights />
        </PullHistoryContextProvider>
      </body>
    </html>
  );
}
