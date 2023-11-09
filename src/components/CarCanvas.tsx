// components/CarCanvas.js
"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from 'styled-components';

import MercedesCarModal from './cars/Mercedesf1new';
import AlfaRomeoCarModal from './cars/AlfaRomeoF1';
import CarModel from './carModel';

const Wrapper = styled.div`
  canvas {
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

  {/* Your Three.js scene content */}

const CarCanvas = () => {

  return (
    <Wrapper>
      <Canvas className="canvas">
        <CarModel />
      </Canvas>
    </Wrapper>
  );
};

export default CarCanvas;
