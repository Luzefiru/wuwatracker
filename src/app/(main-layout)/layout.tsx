import Image from "next/image";

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
      {children}
    </>
  );
}
