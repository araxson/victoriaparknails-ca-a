import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import { MainHeader, MainFooter } from "@/components/layouts";
import { businessInfo } from "@/data";
import { ThemeProvider } from "next-themes";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${businessInfo.name} - ${businessInfo.tagline}`,
  description: businessInfo.description,
  keywords: "nail salon, manicure, pedicure, nail art, spa services, Calgary, Victoria Park",
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: businessInfo.contact.website,
    title: `${businessInfo.name} - ${businessInfo.tagline}`,
    description: businessInfo.description,
    siteName: businessInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} - ${businessInfo.tagline}`,
    description: businessInfo.description,
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${roboto.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <MainHeader />
            <main className="flex-1">
              {children}
            </main>
            <MainFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
