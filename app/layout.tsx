import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
export const metadata: Metadata = {
  title: { default: "Space Tourism", template: "%s | Space Tourism" },
  description:
    "Explore the Moon, Mars, Europa and Titan. Meet the crew and discover the technology behind a journey to space.",
  icons: { icon: "/assets/shared/logo.svg" },
};
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
        {children}
      </body>
    </html>
  );
}
