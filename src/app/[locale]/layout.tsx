import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Roboto_Serif } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin Klitgaard",
  description: "JK's Personal Site",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} ${robotoSerif.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Header />
          <main className="w-9/10 md:w-5/10 mx-auto">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
