import styled from "styled-components";
import { Overview } from "./overview";

const SummaryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: calc(100% - 38em);
  height: 10rem;
  border-radius: 0.625em;
  
  padding: 0.5em;
  gap: 1em;
  top: 10em;
  left: 19rem;
  overflow-y: auto;
  scrollbar-color: black var(--text-secondary);
  scrollbar-width: thin;
  
`;

export function Summary(cards: any) {
  return (
    <SummaryContainer>
      {cards.cards.map((card: any) => (
        <Overview
          key={card.id}
          title={card.title}
          value={card.data}
          benchmark={card.highlighted}
        />
      ))}
    </SummaryContainer>
  );
}