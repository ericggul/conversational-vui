import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sky, Stars, Instances, Instance, Environment, ContactShadows } from "@react-three/drei";
import PropTypes from "prop-types";
import * as S from "./styles";

function MainBackground() {
  return (
    <S.StyledMainBackground>
      <Canvas shadows dpr={[1, 2]} gl={{ alpha: false, antialias: false }} camera={{ fov: 75, position: [0, 0, 60], near: 10, far: 150 }}>
        <fog attach="fog" args={["red", 60, 110]} />
        <ambientLight intensity={1.5} />
        <pointLight position={[100, 10, -50]} intensity={20} castShadow />
        <pointLight position={[-100, -100, -100]} intensity={10} color="red" />

        <Suspense fallback={null}>
          <Environment preset="forest" />
        </Suspense>
        <Sky scale={10000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
        <OrbitControls />
      </Canvas>
    </S.StyledMainBackground>
  );
}
export default MainBackground;

MainBackground.propTypes = {};
