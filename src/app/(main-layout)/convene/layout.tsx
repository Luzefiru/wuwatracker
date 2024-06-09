import { Metadata } from "next";
import { Import } from "lucide-react";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wuwa Tracker | History",
  description:
    "Check your latest Wuthering Waves pull statistics! Wuwa Tracker pity counter for Wuthering Waves, using the up-to-date data with global statistics and more. Share your pulls with your friends and track your account!",
};

export default function ConveneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col h-full justify-between">
        <div className="flex h-full flex-col lg:flex-row gap-8 lg:gap-12 desktop:gap-16">
          <Sidebar />
          <section className="w-full">
            <div className="justify-around md:justify-end w-full md:w-auto mb-4 hidden lg:flex">
              <Button asChild variant="default" size="lg">
                <Link href="/import">
                  <Import className="mr-2 h-4 w-4" /> Import
                </Link>
              </Button>
            </div>
            {children}
          </section>
        </div>
      </div>
    </>
  );
}
