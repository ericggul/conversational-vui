import React from "react";
import * as S from "./styles";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useState, useEffect, useRef } from "react";

import { EffectComposer, DepthOfField, SSAO } from "@react-three/postprocessing";

function Hands(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/anEcho/hand.glb");

  // useFrame((state) => {
  //   let t = state.clock.elapsedTime;
  //   if (group.current) {
  //     group.current.rotation.set(0, t / 5, -Math.sin(t) / 10 + Math.PI / 10);
  //   }
  // });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={nodes.Cube.material} position={[0, 0.02, -0.03]} material-wireframe={true} material-color="#fff" />
    </group>
  );
}

function InvisibleHand({ triggerAnimate }) {
  return (
    <S.StyledInvisibleHand triggerAnimate={triggerAnimate}>
      <Canvas shadows dpr={[1, 2]} camera={{ far: 110, fov: 40, position: [0, 0, 20] }}>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} intensity={1.3} color="#fff" />
        <spotLight position={[-30, -20, 10]} intensity={0.5} color="#fff" />

        <ContactShadows rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]} opacity={0.6} width={130} height={130} blur={1} far={40} />
        <Suspense fallback={null}>
          <Hands scale={2} />
          <Environment preset="city" />
          <EffectComposer>
            <DepthOfField target={[0, 0, 200 / 2]} focalLength={0.8} bokehScale={0.5} height={100} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </S.StyledInvisibleHand>
  );
}
export default InvisibleHand;
