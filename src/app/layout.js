import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jenkins Uwagbai | Frontend Architect & Creative Developer",
  description: "Jenkins Uwagbai | Frontend Architect & Creative Developer",
  verification: {
    google: "AvADXlpaf5hKEoyC6DJDE-oHlRpgo34Ie0TN_1RaB34",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      <meta name="theme-color" content="#ffffff" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
    // <>
    //   <Head>
    //     <title>Webxela | Personal Portfolio</title>
    //     <meta name="description" content="Generate by creat next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <Navbar />
    //   <main>{children}</main>
    // </>
  );
}
