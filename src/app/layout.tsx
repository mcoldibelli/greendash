import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SideMenu } from "../components/sideMenu";
import { Header } from "../components/header";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This dashboard is designed for sales managers and executives to track progress against targets, identify trends, and make informed decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <SideMenu />
        {children}
      </body>
    </html>
  );
}
