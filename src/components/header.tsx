'use client'
import { useState } from "react";
import styled from "styled-components";
import { SelectedDot } from "./sideMenu";
import { FaPlus } from "react-icons/fa6";
import { IoCloudDownloadOutline, IoFilter } from "react-icons/io5";
import { LuCalendar } from "react-icons/lu";

interface HeaderProps { }

const TagHeader = styled.header`
  position: fixed;
  top: 0;
  padding: 2rem;
  width: 100%;
  height: 130px;
  
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 0.9em;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  background-color: var(--text-secondary);
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const MenuItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "var(--bar-color)" : "var(--sidebar-text)")};
  
  &:hover {
    color: var(--logo-color);
  }
`;

const AddView = styled.li`
  display: inline-block;
  margin: 0 1rem;
  color: var(--sidebar-text);
  cursor: pointer;
  
  &:hover {
    color: var(--logo-color);
  }

  &:active {
    transform: scale(1.5);
  }
`;

const ViewContainer = styled.div`
  margin-left: 300px;

  h1 {
    font-size: 1.8rem;
    font-weight: 400;
  }

  p {
    color: rgb(160,160,160);
    font-weight: 300;
    font-size: 1rem;
    padding: 0 0 0.5em;
    margin-bottom: 0.8em;
  }
`;

const FilterContainer = styled.span`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--text-secondary);
    color: var(--sidebar-text);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-left: 1rem;
    border: none;
  }

  input:hover, button:hover {
    color: var(--logo-color);

  }

  button:active {
    transform: scale(1.1);
  }

  input {
    padding: 0.2em;
    border-radius: 0.5rem;
    border: none;
    margin-left: 1rem;
    background-color: var(--text-secondary);
    color: white;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

const IOContainer = styled.div`
  display: flex;
  margin-left: 3rem;
  color: var(--sidebar-text);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--text-secondary);
    color: var(--sidebar-text);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-left: 1rem;
    border: none;
  }

  button:hover {
    color: var(--logo-color);
  }

  button:active {
    transform: scale(1.1);
  }

`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5em;
  margin-right: 2rem;
  color: var(--sidebar-text);  
`;

const CalendarContainer = styled.span`
  display: flex;
  align-items: center;
  background-color: var(--text-secondary);
  padding: 0.5em;
  border-radius: 0.5rem;
`;


export function Header(props: HeaderProps) {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Default");
  const [menuItems, setMenuItems] = useState([
    { name: "Default" },
    { name: "Saved view" },
    { name: "SDR view" },
  ]);

  const resource = "Sales";

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };

  const handleAddViewClick = () => {
    if (menuItems.length >= 6) return alert("You can only have up to  views");
    const newMenuItemName = `View ${menuItems.length + 1}`;
    setMenuItems([...menuItems, { name: newMenuItemName }]);
    setSelectedMenuItem(newMenuItemName);
  }

  return (
    <TagHeader>
      <ViewContainer>
        <h1>{resource} overview</h1>
        <p>Your current {resource} summary and activity</p>
        <MenuList>
          {menuItems.map(({ name }) => (
            <MenuItem key={name} isSelected={selectedMenuItem === name} onClick={() => handleMenuItemClick(name)}>
              {selectedMenuItem === name && <SelectedDot />}
              {name}
            </MenuItem>
          ))}
          <AddView onClick={handleAddViewClick}>+</AddView>
        </MenuList>
      </ViewContainer>
      <RightContainer>
        <IOContainer>
          <button><IoCloudDownloadOutline />Export report</button>
          <button><FaPlus />Invite</button>
        </IOContainer>

        <FilterContainer>
          <CalendarContainer>
            <LuCalendar />
            <input type="date" name="" id="" />
          </CalendarContainer>
          <button><IoFilter />Filters</button>
        </FilterContainer>
      </RightContainer>
    </TagHeader >
  )
}
