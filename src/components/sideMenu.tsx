"use client"

import styled from "styled-components"
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
  background-color: var(--sidebar-bg);
  color: var(--text-primary);
  width: 240px;
  height: 100vh;
  padding: 1em;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  h1 {
    font-size: 1.4em;
    margin-left: 0.5em;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 2em;

  span {
    display: flex;
    flex-direction: column;
  }
`;

const CounterBadge = styled.span`
  background-color: var(--sidebar-bg-search);
  color: var(--text-primary);
  padding: 0.2em 0.4em;
  border-radius: var(--border-radius);
  font-size: 0.8em;
  font-weight: bold;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5em;
  cursor: pointer;
  border-radius: var(--border-radius);

  &:hover {
    background-color: var(--text-secondary);
    color: var(--logo-color);
  }

  &:active {
    translate: 0.1em;
    transform: scale(0.98);
  }

  svg {
    margin-right: 0.5em;
  }

  ${CounterBadge} {
    margin-left: auto;
  }
`;


export function SideMenu() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <SideNav>
      <LogoContainer>
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
        />
        <h1>Greendash</h1>
      </LogoContainer>
      <SearchInputWithIcon
        value={searchValue}
        onChange={handleSearchChange}
      />
      <MenuList>
        <MenuItem><LuBarChart2 />Home</MenuItem>
        <MenuItem><GoDotFill /><HiOutlineChartSquareBar />Dashboard</MenuItem>
        <MenuItem><LuLayers />Projects</MenuItem>
        <MenuItem>
          <RiCheckboxMultipleLine />Tasks<CounterBadge>10</CounterBadge>
        </MenuItem>
        <MenuItem><BiPieChartAlt2 />Reporting</MenuItem>
        <MenuItem><FiUsers />Users</MenuItem>
      </MenuList>
      <MenuList>
        <MenuItem><HiOutlineSupport />Support</MenuItem>
        <MenuItem><BsGear />Settings</MenuItem>
      </MenuList>
      <SpaceUsage />
      <User />
    </SideNav>
  );
}
