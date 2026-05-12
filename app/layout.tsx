import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: COMPANY.name,
  description: `Done-for-you listing videos, social content, and brand films for real estate agents. Based in ${COMPANY.location}.`,
  icons: [
    { rel: 'icon', url: '/light_favicon.ico', media: '(prefers-color-scheme: light)' },
    { rel: 'icon', url: '/dark_favicon.ico', media: '(prefers-color-scheme: dark)' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: 'history.scrollRestoration="manual";window.scrollTo(0,0);' }} />
        {children}
      </body>
    </html>
  );
}
