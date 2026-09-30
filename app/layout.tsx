import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = "https://jenkinsuwagbai.online";
const title = "Jenkins Uwagbai | Software Developer";
const description =
  "Software developer building production frontends and automation tools with React, Next.js, TypeScript and Supabase. Available for remote work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Jenkins Uwagbai" },
  description: description,
  keywords: [
    "Jenkins Uwagbai",
    "software developer Lagos",
    "frontend developer Nigeria",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Supabase",
    "automation developer",
    "remote developer",
    "software engineer",
    "software engineer Lagos",
    "frontend engineer Nigeria",
    "React engineer",
    "Next.js engineer",
    "TypeScript engineer",
    "Supabase engineer",
    "automation engineer",
    "remote engineer",
  ],
  authors: [{ name: "Jenkins Uwagbai", url: siteUrl }],
  creator: "Jenkins Uwagbai",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jenkins Uwagbai | Software Developer",
    description:
      "Production frontends and automation tools with React, Next.js, TypeScript and Supabase.",
    url: "https://jenkinsuwagbai.online",
    siteName: "Jenkins Uwagbai",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@iamjenkinsb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "AvADXlpaf5hKEoyC6DJDE-oHlRpgo34Ie0TN_1RaB34" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable}`}>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      <meta name="theme-color" content="#ffffff" />
      <body>
        <a
          href="#experience"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
