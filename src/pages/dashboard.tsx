"use client";

import React from 'react';
// import CarModel from './carModel';


import styled from 'styled-components';
import AlfaLogo from '../components/alfaLogo';
import AlfaBg from '../images/alfa-background.png';
import Drivers from '@/components/pages/Drivers';
import Stats from '@/components/pages/Stats';
import Contact from '@/components/pages/Contact';
import Engine from '@/components/pages/Engine';
import Home from '@/components/pages/Home';
import Gallery from '@/components/pages/Gallery';
import Sponsors from '@/components/pages/Sponsors';


const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  height: 100%;
  color: white;
  font-family: Arial, sans-serif;
  background-image: url(${AlfaBg.src}); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;



const Title = styled.h2`
  font-size: 30px;
  margin-top: 10px;
`;

const Header = styled.h1`
  font-size: 50px;
  font-weight: bold;
`;

const NavBar = styled.nav`
  display: flex;
  padding-top: 5px;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  width: 60vw;
  justify-content: space-between;
`;

const StyledLi = styled.li<{ isactive: boolean }>`
  padding: 10px;
  flex: 0.125;
  font-weight: ${(props) => (props.isactive ? 'bolder' : 'normal')};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`;

const SectionContent = styled.div`
  margin-top: 20px;
`;


const Dashboard: React.FC = () => {

  const [selectedSection, setSelectedSection] = React.useState<string | null>('Drivers');

  const sections = [
    { title: 'Drivers', component: <Drivers /> },
    { title: 'Stats', component: <Stats /> },
    { title: 'Engine', component: <Engine /> },
    { title: 'Home', component: <Home /> },
    { title: 'Gallery', component: <Gallery /> },
    { title: 'Sponsors', component: <Sponsors /> },
    { title: 'Contact', component: <Contact /> },
  ];


  return (

    <StyledDashboard>
      {/* Navbar */}
      <NavBar>

      <StyledUl>
          {sections.map((section, index) => (
            <StyledLi
            key={index}
            isactive={selectedSection === section.title}
            onClick={() => setSelectedSection(section.title)}
          >
            {section.title === 'Home' ? <AlfaLogo /> : section.title}
          </StyledLi>
          ))}
      </StyledUl>
        
      </NavBar>

      {/* Section Content */}
      <SectionContent>
        {selectedSection &&
          sections.find((section) => section.title === selectedSection)?.component}
      </SectionContent>

      {/* 3D Object */}
      {/* <CarCanvas /> */}
    </StyledDashboard>
  );
};

export default Dashboard;
