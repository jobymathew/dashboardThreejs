// components/CarModel.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const CarModel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const loader = new GLTFLoader();

    camera.position.z = 5;

    // loader.load('/assets/mercedesf1.glb', (gltf) => {
    //   const carModel = gltf.scene;
    //   scene.add(carModel);

    //   animate();

    //   function animate() {
    //     requestAnimationFrame(animate);
    //     renderer.render(scene, camera);
    //   }
    // });

    loader.load( '/assets/mercedesf1.glb', function ( gltf ) {

      scene.add( gltf.scene );
      console.log('adding scene')
    
    }, undefined, function ( error ) {
    
      console.error( error );
    
    } );

    console.log(containerRef.current);
    if (containerRef.current) {
      containerRef.current.appendChild(renderer.domElement);
    }
  }, []);

  return <div ref={containerRef} />;
};

export default CarModel;
