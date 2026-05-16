import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://multichannelconsult.de/";
const title = "AI Transformation Beratung | MultiChannelConsult";
const description =
  "MultiChannelConsult unterstützt Unternehmen bei AI Transformation, Workflow Automation und Multichannel-Strategie, von der Use-Case-Analyse bis zur praktischen Umsetzung.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "MultiChannelConsult",
    images: [
      {
        url: "/assets/image-ki-1280x630.png",
        width: 1280,
        height: 630,
        alt: "MultiChannelConsult – AI Transformation Beratung",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/image-ki-1280x630.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MultiChannelConsult",
  url: siteUrl,
  description:
    "AI Transformation, Workflow Automation und Multichannel Strategy Consulting",
  founder: {
    "@type": "Person",
    name: "Frank Euler",
  },
  areaServed: {
    "@type": "Country",
    name: "Germany",
  },
  serviceType: [
    "AI Transformation Beratung",
    "Workflow Automation",
    "Multichannel Strategie",
    "Marketing und Sales Transformation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
