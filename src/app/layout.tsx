import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Kishor Portfolio",
  description: "Showcasing my skills and projects as a software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Kishor Portfolio</title>
        <meta
          name="google-site-verification"
          content="xv7webo0ChznMJ9PuO58ngbsxIxe5TPk9glgsLuynn4"
        />
        <meta
          name="description"
          content="Explore Kishor's portfolio, a skilled software developer specializing in React.js, Node.js, and MySQL."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kishor-dev.vercel.app/" />
        <meta property="og:title" content="Kishor Portfolio" />
        <meta
          property="og:description"
          content="Explore Kishor's portfolio, a skilled software developer specializing in React.js, Node.js, and MySQL."
        />
        <meta
          property="og:image"
          content="https://kishor-dev.vercel.app//kishor.JPG"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kishor-dev.vercel.app/" />
        <meta property="twitter:title" content="Kishor Portfolio" />
        <meta
          property="twitter:description"
          content="Explore Kishor's portfolio, a skilled software developer specializing in React.js, Node.js, and MySQL."
        />
        <meta
          property="twitter:image"
          content="https://kishor-dev.vercel.app//kishor.JPG"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Kishor, Software Developer, React.js, Node.js, MySQL, Portfolio"
        />
        <meta name="author" content="Kishor" />
      </Head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
