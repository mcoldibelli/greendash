'use client'
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { SelectedDot } from "./sideMenu";
import { FaMoon, FaPlus, FaSun } from "react-icons/fa6";
import { IoCloudDownloadOutline, IoFilter } from "react-icons/io5";
import { LuCalendar } from "react-icons/lu";

interface HeaderProps { }

const TagHeader = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  height: 130px;
  padding: 2em 1em;
  
  display: flex;
  justify-content: space-between;
  font-size: 0.9em;
`;

const MenuList = styled.ul`
  display: flex;
  padding: 0.37em;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  background-color: var(--theme-color-bg);
`;

const MenuItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;
  
  color: ${(props) => (props.isSelected ? "var(--highlight-color)" : "var(--theme-color-primary)")};
  
  &:hover {
    color: var(--highlight-color);
  }

  &:active {
    transform: scale(1.1);
  }
`;

const AddView = styled.li`
  display: inline-block;
  margin: 0 1rem;
  color: var(--theme-text-primary);
  cursor: pointer;
  border: 1px solid var(--theme-color-bg);
  border-radius: 100%;
  padding: 0.25em 0.5em;
  
  &:hover {
    color: var(--highlight-color);
    border: 1px solid var(--highlight-color);
    transition: all 0.3s;
  }
`;

const ViewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  left: 300px;

  h1 {
    color: rgb(255,255,255);
    font-size: 1.8rem;
    font-weight: 500;
  }

  p {
    color: var(--theme-text-secondary);
    font-weight: 300;
    font-size: 1rem;
    padding: 0 0 0.5em;
    margin-bottom: 0.8em;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2em;
  }

  svg {
    cursor: pointer;
  }

  svg:nth-child(2) {
    color: rgb(254,221,0);
  }

  svg:hover {
    color: var(--highlight-color);
  }

  svg:active {
    transform: scale(1.1);
  }
`;

const FilterContainer = styled.span`
  display: flex;
  align-items: center;
  margin-left: 3rem;
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8em 1em;
    margin-left: 1rem;

    background-color: var(--theme-color-bg);
    color: var(--theme-text-primary);
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    box-shadow: var(--box-shadow);
  }

  input:hover, button:hover {
    color: var(--highlight-color);
  }

  button:active {
    transform: scale(1.1);
  }

  input {
    padding: 0.4em;
    border-radius: 0.5rem;
    border: none;
    margin-left: 1rem;
    background-color: var(--text-secondary);
    color: var(--text-secondary);
  }
`;

const IOContainer = styled.div`
  display: flex;
  margin-left: 3rem;
  color: var(--theme-text-primary);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--theme-color-bg);
    color: var(--theme-text-primary);
    padding: 0.8em 1em;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-left: 1rem;
    border: none;
    box-shadow: var(--box-shadow);
  }

  button:hover {
    color: var(--highlight-color);
  }

  button:active {
    transform: scale(1.1);
  }

`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
  margin-right: 2rem;
  color: var(--theme-text-primary);  
`;

const CalendarContainer = styled.span`
  display: flex;
  align-items: center;
  background-color: var(--theme-color-bg);
  padding: 0.58em;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);

  input[type="date"] {
    padding: 0.1em;
    border-radius: 0.3rem;
    margin-left: 1.3em;
    background-color: transparent;
    cursor: pointer;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

const IconContainer = styled.span`
  display: flex;
  margin-right: 0.5rem;
`;

export function Header(props: HeaderProps) {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Default");
  const [menuItems, setMenuItems] = useState([
    { name: "Default" },
    { name: "Saved view" },
    { name: "SDR view" },
  ]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const resource = "Sales";

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem);
  };

  const handleAddViewClick = () => {
    if (menuItems.length >= 6) return alert("You can only have up to 6 views");
    const newMenuItemName = `View ${menuItems.length + 1}`;
    setMenuItems([...menuItems, { name: newMenuItemName }]);
    setSelectedMenuItem(newMenuItemName);
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  return (
    <ThemeProvider theme={{ isDarkTheme }}>
      <TagHeader>
        <ViewContainer>
          <span>
            <h1>{resource} overview</h1>
            {isDarkTheme ? <FaSun onClick={toggleTheme} /> : <FaMoon onClick={toggleTheme} />}
          </span>
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
            <button><IconContainer><IoCloudDownloadOutline /></IconContainer>Export report</button>
            <button><IconContainer><FaPlus /></IconContainer>Invite</button>
          </IOContainer>

          <FilterContainer>
            <CalendarContainer>
              <LuCalendar />
              <input type="date" name="" id="" />
            </CalendarContainer>
            <button><IconContainer><IoFilter /></IconContainer>Filters</button>
          </FilterContainer>
        </RightContainer>
      </TagHeader>
    </ThemeProvider>
  )
}