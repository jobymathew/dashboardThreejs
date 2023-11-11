import D3DataVisualization from '@/components/D3DataVisualization';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 30px;
  margin-top: 20px;
`;

const Stats: React.FC = () => {
  return (
    <div>
       {/* Title for Charts */}
      <Title>Formula 1 Stats</Title>

    {/* D3 Data Visualization */}
    <D3DataVisualization />  
    </div>
  );
};

export default Stats;