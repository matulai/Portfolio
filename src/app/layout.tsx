import "@/styles/globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Head from "next/head";

import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import Menu from "@/components/Menu.tsx";

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matias Laime",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <title>Matias Laime | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio Matias Laime" />
        <meta name="author" content="Matias Laime" />
        <meta name="keywords" content="portfolio, matias laime, developer" />
      </Head>
      <body
        className={`flex flex-col w-full min-h-screen ${inter.variable} antialiased bg-dark-hard text-grey-light`}
      >
        <div className="hidden lg:block">
          <Navbar />
        </div>

        <div className="block lg:hidden">
          <Menu />
        </div>
        <main className="flex flex-col flex-1 justify-start gap-6 py-6 px-10 border-b border-t border-grey-light lg:gap-9 lg:py-9 lg:px-20 2xl:gap-12 2xl:py-12 2xl:px-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
