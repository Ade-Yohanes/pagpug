import type { Metadata, Viewport } from "next";
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

// Viewport optimization untuk mobile search engines
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  colorScheme: "light dark",
};

// Comprehensive SEO metadata
export const metadata: Metadata = {
  title: {
    default: "PAGPUG - Modern Landing Page | Web Development Platform",
    template: "%s | PAGPUG",
  },
  description: "Build amazing digital experiences with PAGPUG. Fast, secure, and scalable web solutions for modern projects. Get started today!",
  keywords: [
    "web development",
    "landing page",
    "modern platform",
    "responsive design",
    "digital experiences",
    "scalable solutions",
    "web application",
    "SaaS platform",
  ],
  authors: [{ name: "PAGPUG Team" }],
  creator: "PAGPUG",
  publisher: "PAGPUG",
  
  // Basic SEO
  alternates: {
    canonical: "https://pagpug.com",
    languages: {
      "en-US": "https://pagpug.com/en",
      "id-ID": "https://pagpug.com/id",
    },
  },

  // Open Graph untuk social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pagpug.com",
    siteName: "PAGPUG",
    title: "PAGPUG - Modern Landing Page | Web Development Platform",
    description: "Build amazing digital experiences with PAGPUG. Fast, secure, and scalable web solutions for modern projects.",
    images: [
      {
        url: "https://pagpug.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PAGPUG - Modern Web Development Platform",
        type: "image/jpeg",
      },
      {
        url: "https://pagpug.com/og-image-square.jpg",
        width: 800,
        height: 800,
        alt: "PAGPUG Logo",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "PAGPUG - Modern Landing Page",
    description: "Build amazing digital experiences with PAGPUG. Fast, secure, and scalable web solutions.",
    images: ["https://pagpug.com/twitter-image.jpg"],
    creator: "@pagpug",
    site: "@pagpug",
  },

  // Mobile optimization
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PAGPUG",
  },

  // Mobile app meta
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Manifest
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
