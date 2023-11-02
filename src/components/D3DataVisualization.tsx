"use client";

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledChart = styled.svg`
  background-color: #333;
  border-radius: 10px;
`;

const D3DataVisualization: React.FC = () => {
  const containerRef = useRef<SVGSVGElement>(null);
  const data = useSelector((state: any) => state.f1);

  useEffect(() => {
    if (containerRef.current) {
      const svg = d3.select(containerRef.current);
      
      // D3 chart rendering logic here

      // Example: Create a bar chart
      const barChart = svg.selectAll('rect').data([data.wins, data.constructors]);

      // Style the bars, labels, and axes

      // You can add further styling to match your design
    }
  }, [data]);

  return <StyledChart ref={containerRef} />;
};

export default D3DataVisualization;
