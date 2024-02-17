import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greg's Website",
  description: "My Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto px-5 py-5 bg-gray-800 text-white">
        <NavBar />
        <main className="py-20">{children}</main></body>
    </html>
  );
}
