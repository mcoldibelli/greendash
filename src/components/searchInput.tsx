import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface SearchProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  background-color: var(--theme-color-bg);
`;

const StyledInput = styled.input`
  background-color: var(--theme-color-bg);
  border: none;
  box-shadow: var(--box-shadow);
  padding: 0.8em;
  width: 100%;
  border-radius: var(--border-radius);
  
  &:focus {
    outline: 1px solid var(--highlight-color);
  }
`;

export function SearchInputWithIcon({ value, onChange, placeholder = "Search" }: SearchProps) {
  return (
    <SearchContainer>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </SearchContainer>
  );
}
