import type { Metadata } from "next";
import "./globals.css";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export const metadata: Metadata = {
  title: "Rose Renuu | UGC Creator",
  description: "Rose Renuu — UGC Creator based in Los Angeles, CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <ScrollAnimator />
        {children}
      </body>
    </html>
  );
}
