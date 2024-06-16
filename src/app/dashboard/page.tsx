"use client";

import styled from "styled-components";
import { Activity } from "../../components/activity";
import { Charts } from "../../components/charts";
import { Header } from "../../components/header";
import { SideMenu } from "../../components/sideMenu";
import { Summary } from "../../components/summary";
import RootLayout from "../layout";

export default function Dashboard() {

  return (
    <RootLayout>
      <Header />
      <SideMenu />
      <Summary />
      <Charts />
      <Activity />
    </RootLayout >
  );
}
