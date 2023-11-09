"use client";

import React from 'react';
// import CarModel from './carModel';
import CarCanvas from './CarCanvas';
// import F1DataFetcher from './F1DataFetcher';
import D3DataVisualization from './D3DataVisualization';
import MercedesLogo from './mercedesLogo';

import styled from 'styled-components';

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  color: white;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-top: 20px;
`;

const Dashboard: React.FC = () => {
  return (
    <StyledDashboard>
      {/* Navbar */}
      {/* <nav>
        <MercedesLogo />
        <ul>
          <li>Drivers</li>
          <li>Engine</li>
          <li>Team</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav> */}

      {/* 3D Object */}
      {/* <CarModel /> */}
      <CarCanvas />
      
      {/* Title for Charts */}
      {/* <Title>Formula 1 Stats</Title> */}

      {/* D3 Data Visualization */}
      {/* <D3DataVisualization /> */}
    </StyledDashboard>
  );
};

export default Dashboard;
