// components/CarCanvas.js

import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from 'styled-components';

import MercedesCarModal from './cars/Mercedesf1new';
import AlfaRomeoCarModal from './cars/AlfaRomeoF1';


const Wrapper = styled.div`
  canvas {
    height: 100vh;
  }
`;

const CarModel = () => {

  return (
    <Wrapper>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />

        {/* <MercedesCarModal /> */}
        <AlfaRomeoCarModal />

        {/* A 3D scene will be black unless there is light */}
        <ambientLight />
      </Canvas>
    </Wrapper>
  );
};

export default CarModel;
