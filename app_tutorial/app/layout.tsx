import type { Metadata } from "next";
import { Inter, Inconsolata, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";

// fotns
const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

// meta tag in html
export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A Next.js project with TypeScript and TailwindCSS.",
  keywords: "Next.js, Typescript, TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
