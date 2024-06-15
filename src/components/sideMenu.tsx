"use client";

import styled from "styled-components";
import Image from "next/image";
import { SearchInputWithIcon } from "./searchInput";
import { User } from "./user";
import { SpaceUsage } from "./spaceUsage";
import { ChangeEvent, useState } from "react";
import { LuBarChart2, LuLayers } from "react-icons/lu";
import { HiOutlineChartSquareBar, HiOutlineSupport } from "react-icons/hi";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { BiPieChartAlt2 } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const SideNav = styled.nav`
  position: fixed;
  width: 17.5em;
  height: 100vh;
  padding: 1em;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--sidebar-bg);
  color: var(--theme-text-primary);
  box-shadow: var(--box-shadow);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  h1 {
    font-size: 2.1em;
    margin-left: 0.5em;
    color: var(--highlight-color);
  }
`;

const CounterBadge = styled.span`
  background-color: var(--sidebar-bg-search);
  padding: 0.2em 0.4em;
  border-radius: var(--border-radius);
  font-size: 0.8em;
  font-weight: bold;
  margin-left: auto;
`;

export const SelectedDot = styled(GoDotFill)`
  margin-right: 0.5em;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 1em  0;

  span {
    display: flex;
    flex-direction: column;
  }
`;

const MenuItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  
  margin: 0.5em 0;
  padding: 0.4em;
  border-radius: var(--border-radius);
  
  cursor: pointer;
  box-shadow: ${({ isSelected }) => (isSelected ? "var(--box-shadow)" : "none")};
  
  color: ${({ isSelected }) => (isSelected ? "var(--highlight-color)" : "inherit")};

  &:hover {
    background-color: var(--text-secondary);
    color: var(--highlight-color);
  }

  &:active {
    translate: 0.1em;
    transform: scale(0.98);
  }

  svg {
    margin-right: 0.5em;
    color: ${({ isSelected }) => (isSelected ? "var(--logo-color)" : "inherit")};
  }
`;

const MainMenu = styled.div`
  flex: 1;
`;

const BottomMenu = styled.div`
  margin-bottom: 0;
`;

export function SideMenu() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  const tasksCounter = 10;
  const [usage, setUsage] = useState(60);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };

  const menuItems = [
    { name: "Home", icon: <LuBarChart2 /> },
    { name: "Dashboard", icon: <HiOutlineChartSquareBar /> },
    { name: "Projects", icon: <LuLayers /> },
    { name: "Tasks", icon: <RiCheckboxMultipleLine />, badge: tasksCounter },
    { name: "Reporting", icon: <BiPieChartAlt2 /> },
    { name: "Users", icon: <FiUsers /> },
    { name: "Support", icon: <HiOutlineSupport /> },
    { name: "Settings", icon: <BsGear /> },
  ];

  return (
    <SideNav>
      <LogoContainer>
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h1>Greendash</h1>
      </LogoContainer>
      <SearchInputWithIcon value={searchValue} onChange={handleSearchChange} />
      <MainMenu>
        <MenuList>
          {menuItems.slice(0, 6).map(({ name, icon, badge }) => (
            <MenuItem key={name} isSelected={selectedMenuItem === name} onClick={() => handleMenuItemClick(name)}>
              {selectedMenuItem === name && <SelectedDot />}
              {icon}
              {name}
              {badge && <CounterBadge>{badge}</CounterBadge>}
            </MenuItem>
          ))}
        </MenuList>
      </MainMenu>

      <BottomMenu>
        <MenuList>
          {menuItems.slice(6).map(({ name, icon }) => (
            <MenuItem key={name} isSelected={selectedMenuItem === name} onClick={() => handleMenuItemClick(name)}>
              {selectedMenuItem === name && <SelectedDot />}
              {icon}
              {name}
            </MenuItem>
          ))}
        </MenuList>
      </BottomMenu>
      <SpaceUsage usage={usage} />
      <User />
    </SideNav>
  );
}
