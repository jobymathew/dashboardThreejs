// components/CarCanvas.js
"use client";

import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from 'styled-components';

import MercedesCarModal from './cars/Mercedesf1new';
import AlfaRomeoCarModal from './cars/AlfaRomeoF1';



const CarModel = (props) => {

  const initialCameraPosition: Array<number> = [0, 0, 5];
  const initialCameraRotation: Array<number> = [0, 0, 0]; // Adjust the angles as needed

  // Create a ref to the AlfaRomeoCarModal component
  const carRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (carRef.current) {
      // carRef.current.rotation.x += 0.01; // Rotate around the X-axis
      carRef.current.rotation.y += 0.01; // Rotate around the Y-axis
    }
  });

  // Set the initial camera position and rotation
  useEffect(() => {
    camera.position.set(2, 3, 5);
    // camera.rotation.set(2, 0, 0);
  }, [camera]);

  return (
    // Putting the 3d object inside mesh to provide ref to all the children objects
    <mesh {...props} ref={carRef}>
        <OrbitControls enableZoom={false} />

        {/* <MercedesCarModal /> */}
        <AlfaRomeoCarModal />

        {/* A 3D scene will be black unless there is light */}
        <ambientLight />
    </mesh>
  );
};

export default CarModel;
