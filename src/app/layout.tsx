import type { Metadata } from "next";
import "./globals.css";
// import localFont from "next/font/local";

// const spacegro = localFont({
//   src: "/fonts/spacegro.ttf",
//   variable: "--font-spacegro",
//   display: "swap",
// });
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
      <body className={` px-[4vw] `}>
        {children}
      </body>
    </html>
  );
}
