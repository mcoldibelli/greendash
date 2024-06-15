"use client";

import { Activity } from "../../components/activity";
import { Charts } from "../../components/charts";
import { Header } from "../../components/header";
import { SideMenu } from "../../components/sideMenu";
import { Summary } from "../../components/summary";
import RootLayout from "../layout";

export default function Dashboard() {

  return (
    <RootLayout>
      <main>
        <Header />
        <SideMenu />
        <Summary />
        <Charts />
        <Activity />
      </main>
    </RootLayout>
  );
}
