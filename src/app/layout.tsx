import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Remove the logo import here, since we don't need to import static assets like this
// You can directly reference the public path instead.
const es = localFont({
  src: "./fonts/Es.ttf",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* This will make sure the logo is used as the favicon */}
        <link rel="icon" href="/images/Logo - Black.png" />
      </head>
      <body className={`${es.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
