'use client'
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { SelectedDot } from "./sideMenu";
import { FaMoon, FaPlus, FaSun } from "react-icons/fa6";
import { IoCloudDownloadOutline, IoFilter } from "react-icons/io5";
import DateRangePicker from "./dateRangePicker";

const TagHeader = styled.header`
  position: absolute;
  left: 17.4em;
  width: calc(100% - 17em);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThemeIconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  // Theme icon
  svg {
    cursor: pointer;
    font-size: 2em;
    color: rgb(255,203,0);
  }
`;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.2em;
  }

  p {
    font-size: 1.1em;
    color: var(--theme-text-secondary);
    margin-bottom: 1em;
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  box-shadow: var(--box-shadow);
  background-color: var(--theme-color-bg);
  border-radius: var(--border-radius);
`;

const MenuItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5em 1em;
  transition: color 0.3s;
`;

const AddView = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.isDarkTheme ? "var(--dark-text)" : "var(--light-text)"};
  font-size: 1.3em;
  cursor: pointer;
  transition: color 0.3s;
  padding: 0 0.5em;
  border-radius: 50%;
  border: 2px solid transparent;

  &:hover {
    color: ${({ theme }) => theme.isDarkTheme ? "var(--dark-text-hover)" : "var(--light-text-hover)"};
    border: 2px solid var(--highlight-color);
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5em;
  
  button {
    display: flex;
    align-items: center;
    gap: 0.7em;
    background-color: transparent;
    color: ${({ theme }) => theme.isDarkTheme ? "var(--dark-text)" : "var(--light-text)"};
    padding: 0.5em 1em;
    border: 2px solid transparent;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.isDarkTheme ? "var(--dark-text-hover)" : "var(--light-text-hover)"};
      border: 2px solid var(--highlight-color);
    }
  }
`;

const IOContainer = styled.div`
  display: flex;
  gap: 1em;

  button {
    display: flex;
    align-items: center;
    background-color: var(--theme-color-bg);
    box-shadow: var(--box-shadow);
  }

  button:hover {
    background-color: var(--theme-color-bg-secondary);
  }
`;

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.325em;

  button {
    display: flex;
    align-items: center;
    background-color: var(--theme-color-bg);
    box-shadow: var(--box-shadow);
  }

  button:hover {
    background-color: var(--theme-color-bg-hover);
  }

`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    gap: 1em;
    background-color: var(--theme-color-bg);
    box-shadow: var(--box-shadow);
  }
`;

export function Header() {
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
          <ThemeIconContainer>
            <h1>{resource} overview</h1>
            {isDarkTheme ? <FaSun onClick={toggleTheme} /> : <FaMoon onClick={toggleTheme} />}
          </ThemeIconContainer>
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
            <button>
              <IconContainer>
                <FaPlus />
              </IconContainer>
              Invite
            </button>
          </IOContainer>

          <FilterContainer>
            <DateRangePicker />
            <button><IconContainer><IoFilter /></IconContainer>Filters</button>
          </FilterContainer>
        </RightContainer>

      </TagHeader>
    </ThemeProvider >
  )
}