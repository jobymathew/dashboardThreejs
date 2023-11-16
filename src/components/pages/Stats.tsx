import BarChart from '@/components/charts/BarChart';
import LineChart from '@/components/charts/LineChart';
import { addTeamStandingData } from '@/redux/teamStandingSlice';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';


  
  const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px; /* Adjust margin as needed */
`;

const ChartContainer = styled.div`
  margin-top: 20px; /* Adjust margin as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartTitle = styled.h2`
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 30px;
`;

const Stats: React.FC = () => {

  const dispatch = useDispatch();
  const lineChartData = useSelector((state: any) => state.lineChart);
  const teamStandingData = useSelector((state: any) => state.teamStanding);

  useEffect(() => {

    let countBottas = 0;
    let countZhou = 0;

    for( let raceData of lineChartData)  {
    
        countBottas += raceData.bottas;
        countZhou += raceData.zhou;
    
        dispatch(addTeamStandingData({
        race: raceData.race,
        bottas: countBottas,
        zhou: countZhou,
        }));
      }
  }, [lineChartData]);

  



  return (
    <StatsContainer>
      <ChartContainer>
        <ChartTitle>Race Results</ChartTitle>
        <LineChart data={lineChartData} />
      </ChartContainer>
      <ChartContainer>
        <ChartTitle>Race Points</ChartTitle>
        <BarChart data={teamStandingData} />
      </ChartContainer>
    </StatsContainer>
  )
};

export default Stats;