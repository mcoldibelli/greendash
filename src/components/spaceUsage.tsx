import { useEffect, useState } from "react";
import styled from "styled-components";
import { VictoryPie } from 'victory';

const SpaceUsageContainer = styled.div`
  position: relative;
  height: 12em;
  padding: 0.5em;
  bottom: 5%;
  border-radius: var(--border-radius);
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  background-color: var(--theme-color-bg);
  color: var(--theme-text-primary);
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
  color: var(--theme-text-primary);
  border: none;
  padding: 0.4em 0.8em;
  border-radius: var(--border-radius);
  font-size: 0.9em;
  background-color: var(--theme-color-bg);
  
  &:hover {
    cursor: pointer;
    color: var(--highlight-color);
    box-shadow: var(--box-shadow);
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
            colorScale={["var(--theme-color-primary)", "var(--theme-bg)"]}
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
