import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sport Bar",
  description: "Bar de Matutina: bebidas geladas, petiscos feitos na hora, sinuca e muito mais!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}

        <footer>
          testando
        </footer>
      </body>
    </html>
  );
}
