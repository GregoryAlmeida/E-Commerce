import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/main-nav/main-nav";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Home da página de E-commerce!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
          <Menu />
          {children}
          <footer>
            <h1>Todos os direitos reservados ©</h1>
          </footer>
      </body>
    </html>
  );
}
