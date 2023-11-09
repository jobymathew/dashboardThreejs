"use client";

import React from 'react';
// import CarModel from './carModel';
import CarCanvas from './CarCanvas';
// import F1DataFetcher from './F1DataFetcher';
import D3DataVisualization from './D3DataVisualization';

import styled from 'styled-components';
import AlfaLogo from './alfaLogo';
import AlfaBg from '../images/alfa-background.png';

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  color: white;
  font-family: Arial, sans-serif;
  background-image: url(${AlfaBg.src}); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;



const Title = styled.h2`
  font-size: 30px;
  margin-top: 20px;
`;

const Header = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

const NavBar = styled.nav`
  display: flex;
  padding-top: 20px;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledLi = styled.li`
  padding: 10px;
`;


const Dashboard: React.FC = () => {
  return (

    <StyledDashboard>
      {/* Navbar */}
      <NavBar>
        
        <StyledUl>
          <StyledLi>Drivers</StyledLi>
          <StyledLi>Engine</StyledLi>
          <StyledLi>Team</StyledLi>
          <StyledLi><AlfaLogo /></StyledLi>
          <StyledLi>Race</StyledLi>
          <StyledLi>Services</StyledLi>
          <StyledLi>Contact</StyledLi>
        </StyledUl>
      </NavBar>

      {/* 3D Object */}
      <CarCanvas />
      
      {/* Title for Charts */}
      <Title>Formula 1 Stats</Title>

      {/* D3 Data Visualization */}
      <D3DataVisualization />
    </StyledDashboard>
  );
};

export default Dashboard;
