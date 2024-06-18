"use client";

import styled from "styled-components";
import { Overview } from "./overview";
import { summaryCards } from '../utils/mocks';

const SummaryContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
  height: 11em;
  width: calc(100% - 38em);
  border-radius: var(--border-radius);
  padding: 1em;
  gap: 1em;
  top: 9em;
  left: 18.5em;
  overflow-y: scroll;
  scrollbar-color: var(--highlight-color) var(--theme-bg);
  scrollbar-width: thin;
`;


export function Summary() {
  return (
    <SummaryContainer>
      {summaryCards.map((card: any) => (
        < Overview
          key={card.id}
          title={card.title}
          value={card.value}
          benchmark={card.benchmark}
        />
      ))}
    </SummaryContainer>
  );
}
