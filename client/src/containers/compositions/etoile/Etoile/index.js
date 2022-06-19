import React, { useEffect, Suspense, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "@F/compositions/screen/Etoile/model";
import Effect from "@F/compositions/screen/Etoile/postEffect";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;

const CameraControls = ({ reset, resetComplete }) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  camera.rotation.set(0, 0, 0);
  let controls = useRef(null);

  useFrame(() => {
    if (reset && controls && controls.current) {
      controls.current.position0.set(0, 0, 0);
      controls.current.reset();
      controls.current.update();
      resetComplete();
    }
  });

  return <OrbitControls ref={controls} args={[camera, domElement]} enableDamping panSpeed={0.2} rotateSpeed={0.7} zoomSpeed={0.5} dampingFactor={0.01} />;
};

function Etoile() {
  return (
    <S.Container>
      <Canvas shadows dpr={[1, 2]} gl={{ alpha: false, antialias: false }} camera={{ fov: 15, position: [0, 0, 1], near: 1, far: 5000 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} color={"#F6DA77"} intensity={1} />
        <pointLight position={[-50, 80, -100]} color="#FFF500" intensity={0.8} />
        <pointLight position={[100, -150, -100]} color="#FCFAD1" intensity={0.9} />

        <Suspense fallback={null}>
          <Model R={20} h={20} d={3} color={`hsl(150, 100%, 60%)`} />
          <Model R={40} h={20} d={3} color={`hsl(150, 100%, 40%)`} />
          <Model R={60} h={20} d={3} color={`hsl(150, 100%, 20%)`} />
        </Suspense>

        <CameraControls />
        <Effect />
      </Canvas>
    </S.Container>
  );
}
export default Etoile;
