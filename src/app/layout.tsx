"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import { SideMenu } from "../components/sideMenu";
import { Header } from "../components/header";
import styled from "styled-components";
import { Activity } from "../components/activity";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"]
});

const LayoutContainer = styled.div`
  display: flex;
  background-color: rgb(20,20,20);
`;

const ContentContainer = styled.div`
  
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <LayoutContainer>
          <SideMenu />
          <div>
            <Header />
            <ContentContainer>{children}</ContentContainer>
          </div>
          <Activity />
        </LayoutContainer>
      </body>
    </html >
  );
}
