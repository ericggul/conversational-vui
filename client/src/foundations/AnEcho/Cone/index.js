import React, { Suspense, useRef } from "react";
import * as S from "./styles";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function SingleCone() {
  const meshRef = useRef();

  // useFrame(({ clock }) => {
  //   let time = clock.getElapsedTime();
  //   if (meshRef && meshRef.current) {
  //     meshRef.current.scale.x = Math.exp(-Math.min(time, 15)) + 1;
  //     meshRef.current.scale.y = Math.exp(-Math.min(time, 15)) + 1;
  //     meshRef.current.scale.z = Math.exp(-Math.min(time, 15)) + 1;
  //   }
  // });
  return (
    <mesh ref={meshRef}>
      <coneGeometry args={[5, 10, 32]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function Cone() {
  return (
    <S.StyledCone>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 100, position: [0, 0, 20] }}>
        <ambientLight intensity={0.2} />
        <directionalLight intensity={3} color={"#fff"} position={[100, 0, 100]} castShadow shadow-mapSize={[1024, 1024]} />
        <Suspense fallback={null}>
          <SingleCone />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </S.StyledCone>
  );
}
export default Cone;
