import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';  // Import core geometries from THREE

const ThreeScene = () => {
  return (
    <Canvas>
      {/* BoxGeometry directly from THREE */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>

      {/* SphereGeometry */}
      <mesh position={[1.5, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="purple" />
      </mesh>

      {/* Add Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
    </Canvas>
  );
};

export default ThreeScene;
