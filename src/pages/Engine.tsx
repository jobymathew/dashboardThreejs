import React from 'react';
import styled from 'styled-components';
import F1EngineImage from '../images/f1Engine.png';
import Image from 'next/image';

const EngineContainer = styled.div`
  background-color: rgba(50, 50, 50, 0.5); /* Dark grey with 0.7 opacity */
  // border: 2px solid darkgrey; /* Dark grey border */
  padding: 100px;
  border-radius: 10px; /* Rounded corners */
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Engine: React.FC = () => {
  return (
    <EngineContainer>
      <Image src={F1EngineImage} alt="F1 Engine" width={500}/>
    </EngineContainer>
  );
};

export default Engine;