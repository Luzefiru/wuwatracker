import { Metadata } from "next";

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
  return <>{children}</>;
}
