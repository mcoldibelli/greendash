import styled from "styled-components";
import { userMocksGroup } from '../utils/mocks'
import Card from "./card";
import { CardProps } from "../utils/types";

const ActivityContainer = styled.aside`
  position: absolute;
  right: 0;
  top: 180px;
  padding: 1em;
  width: 16em;
  color: var(--text-primary);
`;

const ActivityHeader = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;

  h1 {
    font-size: 1.5em;
  }

  button {
    background-color: var(--menu-color);
    color: var(--text-secondary);
    border: 0;
    padding: 0.5em;
    border-radius: 0.5em;
    cursor: pointer;
    transition: 0.15s;

    &:hover {
      background-color: var(--logo-color);
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
      {logs.map((item: CardProps) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          data={item.data}
          highlighted={item.highlighted}
        />))}
    </ActivityContainer>
  )
}