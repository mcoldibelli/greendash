import { useEffect, useState } from "react";
import styled from "styled-components";
import { VictoryPie } from 'victory';

const SpaceUsageContainer = styled.div`
  background-color: var(--sidebar-bg-search);
  color: var(--text-primary);
  position: relative;
  height: 14em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--border-radius);

  p {
    font-size: 1em;
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
  font-size: 0.9em;

  &:hover {
    cursor: pointer;
    background-color: var(--logo-color);
    color: var(--text-secondary);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ChartContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
`;

const CentralLabel = styled.div`
  position: absolute;
  text-align: center;
  font-size: 20px;
  color: var(--text-primary);
`;

export function SpaceUsage({ usage }: { usage: number }) {
  const [showUsage, setShowUsage] = useState(false);

  useEffect(() => {
    if (usage >= 50) {
      setShowUsage(true);
    }
  }, [usage]);

  return (
    showUsage ?
      <SpaceUsageContainer>
        <p>Your team has used {usage}% of your available space. Need more?</p>
        <ChartContainer>
          <VictoryPie
            data={[
              { x: "", y: usage },
              { x: "", y: 100 - usage },
            ]}
            colorScale={["#e6e6e6", "#000000"]}
            innerRadius={80}
            height={200}
            labels={() => null}
          />
          <CentralLabel>{`${usage}%`}</CentralLabel>
        </ChartContainer>
        <ButtonContainer>
          <StyledButton
            onClick={() => setShowUsage(false)}
          >Dismiss</StyledButton>
          <StyledButton>Upgrade plan</StyledButton>
        </ButtonContainer>
      </SpaceUsageContainer> : null
  );
}
