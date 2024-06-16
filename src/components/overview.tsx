"use client";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

interface OverviewProps {
  title: string;
  value: number;
  benchmark: number;
}

const OverviewContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--theme-color-bg);
  
  color: var(--theme-text-primary);
  width: 17.3em;
  flex-grow: 1;
  height: 9.3em;
  padding: 1.25em;
  border-radius: 0.625em;
  box-shadow: var(--box-shadow);
  
  span {
    display: flex;
    justify-content: space-between;
  }

  button {
    font-size: 1.25em;
    color: var(--text-primary);
    background-color: var(--theme-color-bg);
    border: 1px solid var(--theme-color-bg);
    cursor: pointer;
    padding: 0.25em;
    border-radius: 100%;
  
    &:hover {
      color: var(--highlight-color);
      border: 1px solid var(--highlight-color);
      transition: all 0.2s;
    }
  }

  button:hover {
    color: var(--highlight-color);
  }

  button:active {
    transform: scale(0.9);
  }

  h1 {
    font-size: 1.1em;
    font-weight: 400;
  }
`;

const KPI = styled.h2`
  font-size: 2em;
  font-weight: 500;
  color: var(--theme-text-primary);
`;

const Benchmark = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 0.9em;
  margin-top: 0.5em;

  p {
    color: var(--theme-text-secondary);
  }

  .positive {
    color: var(--highlight-color);
  }

  .negative {
    color: red;
  }
`;

export function Overview(data: OverviewProps) {
  const performance = ((data.value / data.benchmark) - 1) * 100;
  const isPositive = performance > 0;

  return (
    <OverviewContainer>
      <span>
        <h1>{data.title}</h1>
        <button><BsThreeDotsVertical /></button>
      </span>
      <KPI>$ {data.value.toFixed(0)}</KPI>
      <Benchmark>
        {isPositive ? <FaArrowUp className="positive" /> : <FaArrowDown className="negative" />}
        <span className={isPositive ? 'positive' : 'negative'}>{performance.toFixed(0)}%</span>
        <p>vs last month</p>
      </Benchmark>
    </OverviewContainer>
  );
}
