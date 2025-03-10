import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agency",
  description: "Our Demo Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-neutral-50 p-[4vw]"}>{children}</body>
    </html>
  );
}
