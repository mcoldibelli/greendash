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
`;

const StyledInput = styled.input`
  color: var(--text-primary);
  background-color: var(--sidebar-bg-search);
  border: none;
  padding: 0.8em;
  width: 100%;
  border-radius: var(--border-radius);

  &:focus {
    outline: 1px solid var(--logo-color);
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
