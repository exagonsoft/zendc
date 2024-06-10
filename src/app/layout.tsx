import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZendC Online Shop",
  description: "Shop with ZendC and Send Directly to Cuba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>ZendC Online Shop</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zendc.vercel.app" />
        <meta property="og:title" content="In Your Coin" />
        <meta
          property="og:description"
          content="Discover our carefully curated selection of high-quality products that can be shipped directly to your loved ones in Cuba at low prices."
        />
        <meta
          property="og:image"
          content="https://zendc.vercel.app/social.png"
        />
        <meta
          property="twitter:title"
          content="Shop with ZendC and Send Directly to Cuba"
        />
        <meta
          property="twitter:description"
          content="Discover our carefully curated selection of high-quality products that can be shipped directly to your loved ones in Cuba at low prices."
        ></meta>
        <meta
          property="twitter:card"
          content="https://zendc.vercel.app/social.png"
        />
        <meta
          property="og:image"
          content="https://zendc.vercel.app/social.png"
        />
        <meta
          property="og:title"
          content="Shop with ZendC and Send Directly to Cuba"
        />
        <meta
          property="og:description"
          content="Discover our carefully curated selection of high-quality products that can be shipped directly to your loved ones in Cuba at low prices."
        />
        <meta property="og:url" content="https://zendc.vercel.app"></meta>
        <meta
          property="twitter:image"
          content="https://zendc.vercel.app/social.png"
        />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
