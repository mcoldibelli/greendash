import styled from "styled-components";
import { VictoryLabel, VictoryPie } from 'victory';

const SpaceUsageContainer = styled.div`
  background-color: var(--sidebar-bg-search);
  color: var(--text-primary);
  position: absolute;
  bottom: 7em;
  height: 12em;
  padding: 1em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius);

  p {
    font-size: 0.95em;
    text-align: center;
  }

  
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5em;
`;

const StyledButton = styled.button`
  background-color: var(--logo-sidebar-bg);
  color: var(--text-primary);
  border: none;
  padding: 0.4em 0.8em;
  border-radius: var(--border-radius);
  font-size: 0.8em;

  &:hover {
    cursor: pointer;
    background-color: var(--logo-color);
    color: var(--text-secondary);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export function SpaceUsage() {
  const value = 80;
  return (
    <SpaceUsageContainer>
      <p>Your team has used {value}% of your available space. Need more?</p>
      <VictoryPie
        data={[
          { x: "", y: value },
          { x: "", y: 100 - value },
        ]}
        colorScale={["#e6e6e6", "#000000"]}
        innerRadius={80}
        height={200}
        standalone={true}
        labelComponent={
          <VictoryLabel
            text={value + "%"}
            style={{ fontSize: 30, fill: "#FFFFFF" }}
            verticalAnchor="middle"
            x={200}
            y={100}
          />
        }
      />
      <ButtonContainer>
        <StyledButton>Dismiss</StyledButton>
        <StyledButton>Upgrade plan</StyledButton>
      </ButtonContainer>
    </SpaceUsageContainer>
  );
}
