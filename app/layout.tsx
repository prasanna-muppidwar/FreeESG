import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header-pawan";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "FreeESG ESG Compliance",
    template: "%s | FreeESG",
  },
  description: "A online art evaluator and marketplace for all art fanatics",
  icons: [{ rel: "icon", url: "./FreeESG.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
