import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#005840",
};

export const metadata: Metadata = {
  title: "PT Guyub Tunggal Songo | Solusi Logistik, Warehousing & Fulfillment Terpercaya",
  description:
    "Partner operasional logistik, pergudangan modern, e-commerce fulfillment, dan distribusi terintegrasi teknologi di Indonesia.",
  keywords: [
    "logistik",
    "warehousing",
    "fulfillment indonesia",
    "distribusi",
    "supply chain",
    "gudang bekasi",
    "PT Guyub Tunggal Songo",
  ],
  authors: [{ name: "PT Guyub Tunggal Songo" }],
  openGraph: {
    title: "PT Guyub Tunggal Songo — Modern Logistics & Fulfillment Solutions",
    description:
      "Tingkatkan efisiensi rantai pasok bisnis Anda dengan layanan pergudangan, fulfillment, dan pengiriman tepat waktu.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={plusJakartaSans.variable} data-scroll-behavior="smooth">
      <body className="antialiased min-h-screen flex flex-col font-sans bg-[#fafbfb] text-[#12212b]">
        {children}
      </body>
    </html>
  );
}
