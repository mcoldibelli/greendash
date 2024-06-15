import React from 'react';
import styled from 'styled-components';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme, VictoryTooltip } from 'victory';
import db from '../utils/database.json';

const ChartContainer = styled.div`
  position: absolute;
  top: 71%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  width: 55.5em;
  height: 25em;
  padding: 1em;
  background: var(--theme-color-bg);
`;

const StyledHeading = styled.span`
  display: flex;
  text-align: center;
  justify-content: space-between;

  
  h1 {
    color: var(--text-color);
    font-size: 1.5em;
  }

  button {
    background: var(--theme-color-bg);
    color: var(--theme-text-primary);
    border: none;
    padding: 0.5em 1em;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: var(--box-shadow);

    &:hover {
      color: var(--highlight-color);
    }

    &:active {
      scale: 0.9;
    }
  }
`;

export function Charts() {
  const data = db.sales_report.map(item => ({
    x: item.month,
    y: item.total_sales
  }));

  return (
    <ChartContainer>

      <StyledHeading>
        <h1>Sales Data for 2023</h1>
        <button>View report</button>
      </StyledHeading>

      <VictoryChart
        theme={VictoryTheme.material}
        height={450}
        width={1000}
        domainPadding={{ x: 30, y: [0, 1] }}
        animate={{ duration: 2000, easing: "bounce" }}

      >
        <VictoryAxis
          tickValues={data.map((_, i) => i + 1)}
          tickFormat={db.sales_report.map(item => item.month)}
          style={{
            axis: { stroke: "#756f6a" },
            tickLabels: { fill: "#756f6a", fontSize: 16, padding: 5 }
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
          style={{
            axis: { stroke: "#756f6a" },
            grid: { stroke: "#e6e6e6" },
            tickLabels: { fill: "#756f6a", fontSize: 18, padding: 5 }
          }}
        />
        <VictoryBar
          data={data}
          x="x"
          y="y"
          labels={({ datum }) => `$${(datum.y / 1000).toFixed(1)}k`}
          labelComponent={<VictoryTooltip style={{ fill: "var(--text-color)" }} />}
          style={{
            data: { fill: "var(--highlight-color)", width: 20 },
            labels: { fontSize: 10, fill: "var(--highlight-color)" }
          }}
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: () => ({
                  target: "data",
                  mutation: (props) => ({ style: { ...props.style, fill: "orange" } })
                }),
                onMouseOut: () => ({
                  target: "data",
                  mutation: (props) => ({ style: { ...props.style, fill: "var(--highlight-color)" } })
                })
              }
            }
          ]}
        />
      </VictoryChart>
    </ChartContainer>
  );
}
