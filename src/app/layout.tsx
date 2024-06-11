import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SideMenu } from "../components/sideMenu";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This dashboard provides an overview of the sales performance across different regions and product categories. It is designed for sales managers and executives to track progress against targets, identify trends, and make informed decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <SideMenu />
        {children}
      </body>
    </html>
  );
}
