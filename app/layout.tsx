import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteName, siteUrl } from "./site";
const barlow = localFont({
  src: "./fonts/Barlow-Regular.ttf",
  variable: "--font-barlow",
  display: "swap",
});
const condensed = localFont({
  src: "./fonts/BarlowCondensed-Regular.ttf",
  variable: "--font-condensed",
  display: "swap",
});
const bellefair = localFont({
  src: "./fonts/Bellefair-Regular.ttf",
  variable: "--font-bellefair",
  display: "swap",
});
const description =
  "Explore the Moon, Mars, Europa and Titan. Meet the crew and discover the technology behind a journey to space.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description,
  // Each route sets its own canonical; og:url is left out so a child page never inherits the home address.
  openGraph: { type: "website", siteName, title: siteName, description },
};

const websiteJsonLd = { "@context": "https://schema.org", "@type": "WebSite", name: siteName, url: siteUrl };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${condensed.variable} ${bellefair.variable}`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
