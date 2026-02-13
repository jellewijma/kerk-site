import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DesignSwitcher from "./components/DesignSwitcher";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evangeliegemeente De Deur Maasluis",
  description: "Een plek om thuis te komen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        {children}
        <DesignSwitcher />
      </body>
    </html>
  );
}
