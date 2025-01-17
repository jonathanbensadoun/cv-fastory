import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV Jonathan Bensadoun In The Memory",
  description: "CV Jonathan Bensadoun a destination de In The Memory",
  metadataBase: new URL("https://jonathan-bensadoun-in-the-memory.netlify.app"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "https://jonathan-bensadoun-in-the-memory.netlify.app/bg_avatar.jpeg",
        width: 800,
        height: 600,
        alt: "Jonathan Bensadoun Avatar",
      },
    ],
  },
};

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
