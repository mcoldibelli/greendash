"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import { SideMenu } from "../components/sideMenu";
import { Header } from "../components/header";
import styled from "styled-components";
import { Activity } from "../components/activity";
import { Summary } from "../components/summary";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"]
});

const LayoutContainer = styled.div`
  display: flex;
  background-color: rgb(12,12,12);
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
            <Summary />
            <ContentContainer>{children}</ContentContainer>
          </div>
          <Activity />
        </LayoutContainer>
      </body>
    </html >
  );
}
