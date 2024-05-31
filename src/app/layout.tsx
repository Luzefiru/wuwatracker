import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wuwa Tracker',
  description:
    'A pity counter for Wuthering Waves, using the up-to-date data with global statistics and more. Share your pulls with your friends and track your account!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col bg-accent dark:bg-background">
            <Header />
            <main className="flex justify-center w-full h-full">
              <div className="w-full h-full px-3 sm:px-10 max-w-screen-desktop ">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
