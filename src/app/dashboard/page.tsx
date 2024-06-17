"use client";

import styled from "styled-components";
import { Activity } from "../../components/activity";
import { Charts } from "../../components/charts";
import { Header } from "../../components/header";
import { SideMenu } from "../../components/sideMenu";
import { Summary } from "../../components/summary";
import RootLayout from "../layout";

const TagContainer = styled.div`
position: absolute;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  min-height: 550px;
  background-color: rgb(40, 45, 40);
`;

export default function Dashboard() {

  return (
    <RootLayout>
      <TagContainer>
        <Header />
        <SideMenu />
        <Summary />
        <Charts />
        <Activity />
      </TagContainer>
    </RootLayout >
  );
}
