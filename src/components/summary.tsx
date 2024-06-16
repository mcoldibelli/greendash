"use client";

import styled from "styled-components";
import { Overview } from "./overview";
import { summaryCards } from '../utils/mocks';

const SummaryContainer = styled.div`
  position: absolute;
  height: 10rem;
  
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 38em);
  border-radius: var(--border-radius);
  padding: 0.5em;
  gap: 1em;
  top: 10em;
  left: 19rem;
  overflow-y: scroll;
  scrollbar-color: #909090 white;
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
