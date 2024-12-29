import { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";

// Remove the logo import here, since we don't need to import static assets like this
// You can directly reference the public path instead.
const es = localFont({
  src: "../fonts/Es.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "limitless",
  description: "Louer une voiture",
  icons: {
    // Set your logo as the favicon by referencing it from the 'public' folder
    icon: "/images/Logo - Black.png",  // Path relative to the public folder
  },
};

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};


export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<
  Props
>) {
   // Ensure that the incoming `locale` is valid
   if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* This will make sure the logo is used as the favicon */}
        <link rel="icon" href="/images/Logo - Black.png" />
      </head>
      <body className={`${es.variable}  antialiased`}>
      <NextIntlClientProvider messages={messages}>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
