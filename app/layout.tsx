import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import BootstrapClient from "@/context/BootstrapClient";
import Navbar from "@/components/Navbar";
import AptosWalletProvider from "@/context/AptosWalletProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Immutable Legends",
  description: "To The Moon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AptosWalletProvider>
          <BootstrapClient />
          {children}
        </AptosWalletProvider>
      </body>
    </html>
  );
}
