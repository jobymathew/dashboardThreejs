import D3DataVisualization from '@/components/D3DataVisualization';
import BarChart from '@/components/charts/BarChart';
import LineChart from '@/components/charts/LineChart';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 30px;
  margin-top: 20px;
`;

const data = [
    { race: 'Race 1', bottas: 15, zhou: 18 },
    { race: 'Race 2', bottas: 14, zhou: 17 },
    { race: 'Race 3', bottas: 12, zhou: 19 },
    { race: 'Race 4', bottas: 16, zhou: 20 },
    { race: 'Race 5', bottas: 13, zhou: 16 },
    { race: 'Race 6', bottas: 7, zhou: 9 },  
    { race: 'Race 7', bottas: 14, zhou: 17 },
    { race: 'Race 8', bottas: 11, zhou: 18 },
    { race: 'Race 9', bottas: 19, zhou: 15 },
    { race: 'Race 10', bottas: 20, zhou: 14 },
    { race: 'Race 11', bottas: 15, zhou: 16 },
    { race: 'Race 12', bottas: 12, zhou: 13 },
    { race: 'Race 13', bottas: 18, zhou: 14 },
    { race: 'Race 14', bottas: 16, zhou: 17 },
    { race: 'Race 15', bottas: 13, zhou: 20 },
    { race: 'Race 16', bottas: 14, zhou: 18 },
    { race: 'Race 17', bottas: 17, zhou: 19 },
    { race: 'Race 18', bottas: 18, zhou: 15 },
    { race: 'Race 19', bottas: 19, zhou: 16 },
    { race: 'Race 20', bottas: 20, zhou: 17 },
    { race: 'Race 21', bottas: 15, zhou: 14 },
    { race: 'Race 22', bottas: 12, zhou: 13 },
    { race: 'Race 23', bottas: 11, zhou: 12 },
    { race: 'Race 24', bottas: 9, zhou: 11 },  
    { race: 'Race 25', bottas: 8, zhou: 10 },  
    { race: 'Race 26', bottas: 10, zhou: 8 },  
  ];

  const calculateF1Points = (position: number): number => {
    // Implement your F1 point system calculation here
    // Example: Using the standard F1 point system
    const f1PointScheme = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
    return position <= f1PointScheme.length ? f1PointScheme[position - 1] : 0;
  };
  
  let countBottas = 0;
  let countZhou = 0;

  const teamStandingsData = data.map(({ race, bottas, zhou }) => {
    
    countBottas += bottas;
    countZhou += zhou;

    return {
    race,
    bottas: countBottas,
    zhou: countZhou,
    }
  });
  
const Stats: React.FC = () => {
  return (
    <div>

        <LineChart data={data}  />
        <BarChart data={teamStandingsData} />
    </div>
  );
};

export default Stats;