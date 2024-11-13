import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const goodTimeGrotesk = localFont({
  src: "./fonts/GoodTimeGrotesk.otf",
  variable: "--font-goodtime-grotesk",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "UniConnect Berlin",
  description: "Be connected",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${goodTimeGrotesk.variable} antialiased bg-[#f8f7f4] text-neutral-900`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
