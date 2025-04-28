import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

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
      <body
        className={`flex flex-col w-full min-h-screen ${inter.variable} antialiased bg-dark-hard text-grey-light`}
      >
        <Navbar />
        <main className="flex flex-col flex-1 justify-start gap-9 py-9 px-20 border-b border-t border-grey-light 2xl:gap-12 2xl:py-12 2xl:px-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
