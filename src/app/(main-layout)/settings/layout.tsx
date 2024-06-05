export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex mx-auto w-full flex-col gap-4 md:gap-8 max-w-screen-lg">
      {children}
    </div>
  );
}
