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
  
  background-color: var(--sidebar-bg);
  color: var(--text-primary);
  width: 17.3em;
  flex-grow: 1;
  height: 9.3em;
  padding: 1.25em;
  border-radius: 0.625em;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  span {
    display: flex;
    justify-content: space-between;
  }

  button {
    font-size: 1.25em;
    color: var(--text-primary);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  button:hover {
    color: var(--logo-color);
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
  color: var(--text-primary);
`;

const Benchmark = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 0.9em;
  color: var(--logo-color);
  margin-top: 0.5em;

  p {
    color: var(--text-secondary);
  }

  .arrow {
    color: red;
  }
`;

export function Overview(data: OverviewProps) {
  const isPositive = data.value > 0;
  const performance = (data.value / data.benchmark) * 100;

  return (
    <OverviewContainer>
      <span>
        <h1>{data.title}</h1>
        <button><BsThreeDotsVertical /></button>
      </span>
      <KPI>$ {data.value.toFixed(0)}</KPI>
      <Benchmark>
        {isPositive ? <FaArrowUp /> : <FaArrowDown className="arrow" />}
        <span>{performance.toFixed(0)}%</span>
        <p>vs last month</p>
      </Benchmark>
    </OverviewContainer>
  );
}
