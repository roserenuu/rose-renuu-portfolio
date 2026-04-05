import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
