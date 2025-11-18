import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Max Bey - Güvenilir Siteler | En İyi Bahis ve Casino Siteleri",
  description: "Max Bey ile güvenilir bahis ve casino sitelerini keşfedin. Lisanslı, hızlı ödemeli ve yüksek bonus veren siteleri inceleyin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
