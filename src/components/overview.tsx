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
    color: var(--text-primary);
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  h1 {
    font-size: 1.2em;
    font-weight: 400;
  }
`;

export function Overview(props: OverviewProps) {
  return (
    <OverviewContainer>
      <span>
        <h1>{props.title}</h1>
        <button><BsThreeDotsVertical /></button>
      </span>
      <span>{props.value}</span>
      <span>
        {props.benchmark > 0 ? <FaArrowUp /> : <FaArrowDown />}
        <span>{props.benchmark}%</span>
      </span>
    </OverviewContainer>
  )
};