import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "Nathan Glen's Portfolio",
  description: "Data Science @ UF • AI & Bioinformatics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={GeistSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
