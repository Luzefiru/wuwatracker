import Image from "next/image";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Image
        src="/bg/cover.png"
        width="2560"
        height="1440"
        alt="Cover Image"
        className="fixed top-0 left-0 w-full h-full object-cover -z-20 opacity-35 mix-blend-lighten"
      />
      <div className="flex min-h-screen w-full flex-col relative bg-accent dark:bg-transparent">
        <Header />
        <main className="flex justify-center w-full h-full my-10">
          <div className="w-full h-full px-3 sm:px-10 max-w-screen-desktop grid">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
