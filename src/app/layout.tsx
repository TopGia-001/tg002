import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TopGiaKids",
  description: "TopGiaKids",
  icons: {
    icon: "/favicon-kids.jpeg",
    shortcut: "/favicon-kids.jpeg",
    apple: "/favicon-kids.jpeg",
  },
  openGraph: {
    title: "Rinh TopGiaKids - Lộc Đầy Nhà",
    description: "Tham gia ngay để có cơ hội nhận những phần quà vô cùng hấp dẫn cùng TopGiaKids #rinhtopgiakids #locdaynha",
    url: "https://locdaynha.topgiakids.vn",
    siteName: "TopGiaKids",
    images: [
      {
        url: "https://locdaynha.topgiakids.vn/og-kids.jpeg",
        width: 1200,
        height: 630,
        alt: "TopGiaKids preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
