/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 alfaRomeoF1.gltf 
Author: markste-in
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://fetchcfd.com/view-project/3579
Title: Alfa Romeo C42 F1 Car 3D Model
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


export default function Model(props) {
  const { nodes, materials } = useGLTF('/alfaRomeoF1.gltf')
  // const { nodes, materials } = useGLTF('/static/media/alfaRomeoF1.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.046, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.136}>
        <mesh geometry={nodes.Bits_Dup_2001_Mesh022.geometry} material={materials['Default_OBJ.003']} />
        <mesh geometry={nodes.Bits_Dup_2001_Mesh022_1.geometry} material={materials['Default_OBJ.004']} />
        <mesh geometry={nodes.Bits_Dup_2001_Mesh022_2.geometry} material={materials['Default_OBJ.002']} />
        <mesh geometry={nodes.Bits_Dup_2001_Mesh022_3.geometry} material={materials['Default_OBJ.001']} />
        <mesh geometry={nodes.Bits_Dup_2001_Mesh022_4.geometry} material={materials['Default_OBJ.009']} />
        <mesh geometry={nodes.Bits_Dup_2001_Mesh022_5.geometry} material={materials['Default_OBJ.008']} />
        <mesh geometry={nodes.Bits_Dup_2001_Mesh022_6.geometry} material={materials['Default_OBJ.007']} />
        <mesh geometry={nodes.Bits_Dup_2001_Mesh022_7.geometry} material={materials['Default_OBJ.006']} />
        <mesh geometry={nodes.Bits_Dup_2001_Mesh022_8.geometry} material={materials['Default_OBJ.011']} />
        <mesh geometry={nodes.Bits_Dup_2001_Mesh022_9.geometry} material={materials['Default_OBJ.013']} />
        <mesh geometry={nodes.Bits_Dup_2001_Mesh022_10.geometry} material={materials['Default_OBJ.005']} />
      </group>
    </group>
  )
}

useGLTF.preload('/alfaRomeoF1.gltf')
// useGLTF.preload('/static/media/alfaRomeoF1.gltf')

