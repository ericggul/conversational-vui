import React, {
  useState,
  Suspense,
  useRef,
  useEffect,
  useCallback,
} from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";

import UIUtils from "@/foundations/flux/UIUtils/uiutils";

import { Model } from "@F/flux/model";
import * as S from "./styles";
import { OrbitControls } from "@react-three/drei";

const LENGTH = 8;
const DATA = new Array(LENGTH ** 3).fill(0).map((_, id) => ({
  id,
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  source: {
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
  },
  target: {
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
  },
  store: { position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 } },
  store2: { position: { x: 0, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 } },
}));

const CameraControls = ({ reset, resetComplete }) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  let controls = useRef(null);

  useFrame(() => {
    if (reset && controls && controls.current) {
      controls.current.position0.set(0, 0, 200);
      controls.current.reset();
      controls.current.update();
      resetComplete();
    }
  });

  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      enableDamping
      zoomSpeed={0.3}
      dampingFactor={0.01}
    />
  );
};

function Flux() {
  const [resetCamera, setResetCamera] = useState(false);
  const [realTimeMode, setRealTimeMode] = useState(true);

  let timeNow = new Date();
  const [layoutIdx, setLayoutIdx] = useState(timeNow.getHours() % 12);
  const [layout, setLayout] = useState(
    realTimeMode ? timeNow.getHours() % 12 : layoutIdx
  );
  const [progress, setProgress] = useState(
    realTimeMode ? timeNow.getMinutes() / 60 + 0.001 : null
  );

  const timeChecker = useCallback(() => {
    timeNow = new Date();
    setLayout(timeNow.getHours() % 12);
    setProgress(timeNow.getMinutes() / 60 + 0.001);
  }, [realTimeMode]);
  useEffect(() => {
    if (realTimeMode) {
      timeChecker();
      let interval = window.setInterval(timeChecker, 60000);
      return () => window.clearInterval(interval);
    } else {
      setLayout(layoutIdx);
      setProgress(null);
    }
  }, [realTimeMode, layoutIdx]);

  return (
    <>
      <S.Container>
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ alpha: false, antialias: false }}
          camera={{ fov: 75, position: [0, 0, 200], near: 1, far: 5000 }}
        >
          <ambientLight intensity={0.5} />
          <pointLight
            position={[100, 100, 100]}
            color={"#F6DA77"}
            intensity={1}
          />
          <pointLight
            position={[-50, 80, -100]}
            color="#FFF500"
            intensity={0.8}
          />
          <pointLight
            position={[100, -150, -100]}
            color="#FCFAD1"
            intensity={0.9}
          />

          <Suspense fallback={null}>
            <Model
              layout={layout}
              progress={progress}
              data={DATA}
              realTimeMode={realTimeMode}
            />
          </Suspense>
          <CameraControls
            reset={resetCamera}
            resetComplete={() => setResetCamera(false)}
          />
        </Canvas>
        <UIUtils
          current={layoutIdx}
          clicked={(i) => setLayoutIdx(i)}
          resetPos={() => setResetCamera(true)}
          realTimeMode={realTimeMode}
          alterTimeMode={(newMode) => setRealTimeMode(newMode)}
          layout={layout}
          progress={progress}
        />
      </S.Container>
    </>
  );
}
export default Flux;

Flux.propTypes = {};
