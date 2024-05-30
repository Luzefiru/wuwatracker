import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { Sidebar } from '@/components/ui/sidebar';
import { Toaster } from '@/components/ui/sonner';

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
          <div className="flex min-h-screen w-full flex-col">
            <Header />
            <div className="h-[80%]">
              <div className="flex h-full">
                <Sidebar />
                <div className="w-full">{children}</div>
              </div>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
