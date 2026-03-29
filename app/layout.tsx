import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WhatsApp Web",
  description:
    "WhatsApp Web - Send and receive messages without keeping your phone online. Use WhatsApp on up to 4 linked devices and 1 phone at the same time.",
  keywords: ["WhatsApp", "messaging", "chat", "communication", "instant messaging"],
  authors: [{ name: "WhatsApp Clone" }],
  openGraph: {
    title: "WhatsApp Web",
    description: "Send and receive messages without keeping your phone online.",
    type: "website",
    images: ["/icons/whatsapp-logo-full.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Web",
    description: "Send and receive messages without keeping your phone online.",
  },
  icons: {
    icon: "/icons/whatsapp-logo-full.svg",
    apple: "/icons/whatsapp-logo-full.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#25D366",
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
