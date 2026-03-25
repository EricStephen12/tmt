import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TMT Group | ...always with you",
  description: "TMT Group is a diversified business enterprise providing innovative, practical, and value-driven solutions across strategic sectors including Real Estate, Consulting, Logistics, Agriculture, Schools, Media & Tech, Hospitality, and TMCA.",
  keywords: ["TMT Group", "Real Estate Abuja", "Business Consulting Nigeria", "Logistics Nigeria", "TMT Agriculture", "Princewill Okafor"],
  openGraph: {
    title: "TMT Group | ...always with you",
    description: "TMT Group exists to serve individuals, organizations, and communities through specialized subsidiaries.",
    url: "https://www.tmtgroup.com.ng",
    siteName: "TMT Group",
    images: [
      {
        url: "https://www.tmtgroup.com.ng/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "TMT Group Corporate Preview",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TMT Group | ...always with you",
    description: "TMT Group exists to serve individuals, organizations, and communities through specialized subsidiaries.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.tmtgroup.com.ng",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
