import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Yellow Bean Cafe",
  description: "Selamat datang di The Yellow Bean Cafe, tempat terbaik untuk bersantai dengan kopi dan makanan lezat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans antialiased bg-brand-gray text-brand-black min-h-screen flex flex-col selection:bg-brand-yellow/30`}>
        {children}
      </body>
    </html>
  );
}
