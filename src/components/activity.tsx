import styled from "styled-components";
import { userMocksGroup } from '../utils/mocks'
import Card from "./card";
import { CardProps } from "../utils/types";

const ActivityContainer = styled.aside`
  position: absolute;
  right: 0;
  top: 9em;
  width: 18em;
  height: calc(100vh - 9em);
  background-color: var(--theme-color-bg);
  
  overflow-y: auto;
  border-radius: 0.5em 0 0 0;
  box-shadow: var(--box-shadow);
  
  &::-webkit-scrollbar {
    width: .5em;
  }
`;

const ActivityHeader = styled.span`
  position: sticky;
  top: 0;
  height: 3em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 1em;
  background-color: var(--theme-color-bg);
  z-index: 1;
  box-shadow: 0 0.1em 1em rgba(0, 0, 0, 0.1);
  
  h1 {
    font-size: 1.5em;
  }
  
  button {
    background-color: var(--theme-color-bg);
    color: var(--theme-text-secondary);
    border: none;
    padding: 0.5em;
    border-radius: var(--border-radius);
    transition: 0.15s;
    cursor: pointer;

    &:hover {
      box-shadow: var(--box-shadow);
      color: var(--highlight-color);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;

export function Activity() {
  const logs = userMocksGroup;
  return (
    <ActivityContainer>
      <ActivityHeader>
        <h1>Activity</h1>
        <button>View all</button>
      </ActivityHeader>
      <span>

        {logs.map((item: CardProps) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            data={item.data}
            highlighted={item.highlighted}
          />))}
      </span>
    </ActivityContainer>
  )
}