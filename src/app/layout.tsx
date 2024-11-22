import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/main-nav/main-nav";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Home da página de E-commerce!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
