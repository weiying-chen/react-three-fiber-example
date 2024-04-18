import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Model } from './Model'

const Scene = () => {
  // Use to execute custom animation logic or any continuous updates within the 3D scene on every frame
  // useFrame(() => {});

  return (
    <>
      <Model position={[0, 0, 0]} scale={0.2} />
    </>
  );
};

const App = () => {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
      <OrbitControls />
      <Scene />
    </Canvas>
  );
};

export default App;
