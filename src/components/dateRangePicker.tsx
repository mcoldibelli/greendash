import React, { useState } from 'react';
import { LuCalendar } from 'react-icons/lu';
import styled from 'styled-components';

const StyledDateRangePicker = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  background-color: var(--theme-color-bg);
  box-shadow: var(--box-shadow);

  // calendar icon
  svg {
    margin-left: 1em;
    font-size: 1.1em;
    color: var(--theme-text-primary);
  }

  input {
    padding: 0.4em;
    color: var(--theme-text-primary);
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: var(--border-radius);
    transition: border 0.3s;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--highlight-color);
    }

    &:focus {
      outline: none;
      border: 2px solid var(--highlight-color);
    }
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

function DateRangePicker() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleStartDateChange = (event: any) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: any) => {
    setEndDate(event.target.value);
  };

  return (
    <StyledDateRangePicker>
      <LuCalendar />
      <label htmlFor="startDate">
        <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />
      </label>
      -
      <label htmlFor="endDate">
        <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
      </label>
    </StyledDateRangePicker>
  );
}

export default DateRangePicker;
