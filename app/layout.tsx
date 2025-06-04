import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cookies } from "next/headers";
import ThemeCookieSync from "@/components/ThemeCookieSync";
import { TanstackQueryProvider } from "./tanstack-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Header from "@/components/layout/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Savannah Informatic - Interview by David Clinton",
    template: "%s | Savannah Informatic",
  },
  description:
    "Read the in-depth interview by David Clinton featuring Savannah Informatic's insights, mission, and innovations.",
  keywords: [
    "Savannah Informatic",
    "David Clinton interview",
    "tech interview",
    "startup insights",
    "software company",
    "innovation",
    "technology discussion",
  ],
  authors: [{ name: "David Clinton", url: "https://github.com/daveclinton" }],
  metadataBase: new URL("https://savannah-informatic.vercel.app"),
  openGraph: {
    description:
      "Read the in-depth interview by David Clinton featuring Savannah Informatic's insights, mission, and innovations.",
    url: "https://savannah-informatic.vercel.app",
    siteName: "Savannah Informatic",
    images: [
      {
        url: "https://savannah-informatic.vercel.app/banner.png",
        width: 1200,
        height: 630,
        alt: "Savannah Informatic Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Read the in-depth interview by David Clinton featuring Savannah Informatic's insights, mission, and innovations.",
    images: ["https://savannah-informatic.vercel.app/banner.png"],
  },
  manifest: "/site.webmanifest",
  robots: "index, follow",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = (await cookieStore).get("theme")?.value || "light";
  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme={theme}
            enableSystem
            disableTransitionOnChange
          >
            <NuqsAdapter>
              <Header />
              {children}
            </NuqsAdapter>
            <ThemeCookieSync />
          </ThemeProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
