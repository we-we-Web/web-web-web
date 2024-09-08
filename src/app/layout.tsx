import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web web web",
  description: "web web web team web",
  icons: {
    icon: ['/assets/favicon.ico?v=4'],
    apple: ['/assets/apple-touch-icon.png?v=4'],
    shortcut: ['/assets/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/favicon.ico?v=4" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
