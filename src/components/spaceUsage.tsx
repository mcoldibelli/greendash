import { useEffect, useState } from "react";
import styled from "styled-components";
import { VictoryPie } from 'victory';

const SpaceUsageContainer = styled.div`
  position: relative;
  height: 11em;
  padding: 0.5em;
  border-radius: var(--border-radius);
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  background-color: var(--theme-color-bg);
  color: var(--text-primary);
  box-shadow: var(--box-shadow);

  p {
    text-align: center;
  }  
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1em;
`;

const StyledButton = styled.button`
  color: var(--text-primary);
  border: none;
  padding: 0.4em 0.8em;
  border-radius: var(--border-radius);
  font-size: 0.9em;

  &:hover {
    cursor: pointer;
    background-color: var(--logo-color);
    box-shadow: var(--box-shadow);
    color: var(--highlight-color);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ChartContainer = styled.div`
  position: relative;
  width: 11.25em;
  height: 11.25em;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CentralLabel = styled.div`
  position: absolute;
  text-align: center;
  font-size: 1.3em;
  color: var(--theme-text-primary);
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
