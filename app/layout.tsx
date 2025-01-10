import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV Jonathan Bensadoun Fastory",
  description: "CV Jonathan Bensadoun a destination de Fastory",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "https://jonathan-bensadoun-fastory.netlify.app/bg_avatar.jpeg",
        width: 800,
        height: 600,
        alt: "Jonathan Bensadoun Avatar",
      },
    ],
  },
};

console.log(`
     _____
   /      \\
  |  () ()  |
   \\  ^  /
    |||||
    |||||
  `);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
