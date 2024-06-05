import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wuwa Tracker | Privacy Policy",
  description:
    "Understand how Wuwa Tracker works and what data is being stored and utilized to enhance your user experience. Wuwa Tracker pity counter for Wuthering Waves, using the up-to-date data with global statistics and more. Share your pulls with your friends and track your account!",
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
