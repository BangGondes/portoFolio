import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad Fikri - Web Developer",
  description:
    "Portfolio Ahmad Fikri. Frontend Developer dengan pengalaman di React, Next.js, dan teknologi modern lainnya.",
  keywords: [
    "Web Developer",
    "Next.js",
    "React",
    "Frontend",
    "Portfolio",
    "Ahmad Fikri",
  ],
  authors: [{ name: "Ahmad Fikri", url: "https://fikrinursalim.vercel.app" }],
  creator: "Ahmad Fikri",
  openGraph: {
    title: "Ahmad Fikri - Web Developer",
    description:
      "Portfolio Ahmad Fikri. Frontend Developer dengan pengalaman di React, Next.js, dan teknologi modern lainnya.",
    url: "https://fikrinursalim.vercel.app",
    siteName: "Ahmad Fikri Portfolio",
    images: [
      {
        url: "https://fikrinursalim.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmad Fikri - Web Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Fikri - Web Developer",
    description:
      "Portfolio Ahmad Fikri. Frontend Developer dengan pengalaman di React, Next.js, dan teknologi modern lainnya.",
    images: ["https://fikrinursalim.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link
          rel="icon"
          href="/favicon-192.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/favicon-512.png"
          type="image/png"
          sizes="512x512"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta Tags tambahan */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
