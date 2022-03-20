import * as S from "./styles";
import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import html2canvas from "html2canvas";

const MorphingBox = () => {
  const boxRef = useRef();
  const meshRef = useRef();

  useEffect(() => {
    if (boxRef && boxRef.current && meshRef && meshRef.current) {
      meshRef.current.morphTargetInfluences = [];
      boxRef.current.morphAttributes.position = [];
      const positionAttribute = boxRef.current.attributes.position;

      //To Transit
      const spherePositions = [];
      for (let i = 0; i < positionAttribute.length; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const z = positionAttribute.getZ(i);

        spherePositions.push(
          x * Math.sqrt(1 - (y * y) / 2 - (z * z) / 2 + (y * y * z * z) / 3),
          y * Math.sqrt(1 - (x * x) / 2 - (z * z) / 2 + (x * x * z * z) / 3),
          z * Math.sqrt(1 - (y * y) / 2 - (x * x) / 2 + (x * x * y * y) / 3)
        );
      }

      boxRef.current.morphAttributes.position[0] = new THREE.Float32BufferAttribute(spherePositions, 3);
    }
  }, [boxRef, meshRef]);

  useFrame(
    (state) => {
      if (meshRef && meshRef.current && meshRef.current.morphTargetInfluences) {
        meshRef.current.morphTargetInfluences[0] = Math.min(1, state.clock.elapsedTime / 10);
      }
    },
    [meshRef]
  );

  return (
    <mesh ref={meshRef}>
      <boxGeometry ref={boxRef} args={[2, 2, 2, 32, 32, 32]} />
      {/* <cylinderGeometry ref={boxRef} args={[5, 5, 20, 64]} /> */}
      <meshPhongMaterial color="red" flatShading={true} />
    </mesh>
  );
};

const PlaneMesh = ({ texture, size }) => {
  const [planeSize, setPlaneSize] = useState({ width: 10, height: 10 });
  const planeRef = useRef();
  useThree((state) => {
    const distance = state.camera.position.z;
    const fov = (state.camera.fov * Math.PI) / 180;
    const planeHeightAtDistance = 2 * Math.tan(fov / 2) * distance;
    // setPlaneSize({
    //   width: (planeHeightAtDistance * size.width) / size.height,
    //   height: planeHeightAtDistance,
    // });
    if (planeRef && planeRef.current) {
      //   planeRef.current.setScale(2);
      console.log(planeRef.current);
    }
  });

  console.log(planeSize);
  return (
    <mesh>
      <planeGeometry ref={planeRef} args={[10, 10, 32, 32]} color="white" />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
};

const OriginalItem = () => {
  const [canvas, setCanvas] = useState(null);
  const htmlRef = useRef();
  const canvasRef = useRef();
  const [texture, setTexture] = useState(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (htmlRef && htmlRef.current) {
      const boundingSize = htmlRef.current.getBoundingClientRect();
      setSize({ width: boundingSize.width, height: boundingSize.height });

      html2canvas(htmlRef.current).then((canvas) => {
        setTimeout(() => {
          setCanvas(canvas);
          let tempTexture = new THREE.CanvasTexture(canvas);
          tempTexture.needsUpdate = true;
          setTexture(tempTexture);
        }, 100);
      });
    }
  }, [htmlRef]);

  return (
    <>
      {canvas == null ? (
        <S.Original ref={htmlRef}>
          <S.Header>Hello World</S.Header>
          <S.Body>{`${Math.random().toString(36)} `.repeat(100)}</S.Body>
        </S.Original>
      ) : (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 100, position: [0, 0, 20] }}>
          <ambientLight intensity={0.2} />
          <directionalLight intensity={3} color={"white"} position={[100, 0, 100]} castShadow shadow-mapSize={[1024, 1024]} />
          <PlaneMesh texture={texture} size={size} />
        </Canvas>
      )}
    </>
  );
};

export default function CylinderTexture() {
  return (
    <S.Container>
      <OriginalItem />
      {/* <Canvas shadows dpr={[1, 2]} camera={{ fov: 100, position: [0, 0, 20] }}>
        <color attach="background" args={["black"]} />

        <ambientLight intensity={0.2} />
        <directionalLight intensity={3} color={"#fff"} position={[100, 0, 100]} castShadow shadow-mapSize={[1024, 1024]} />
        <MorphingBox />
        <OrbitControls />
      </Canvas> */}
    </S.Container>
  );
}
