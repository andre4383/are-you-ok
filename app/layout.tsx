import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

const NotoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "are you ok",
  description: "are you ok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NotoSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
