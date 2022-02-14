import React, {
  forwardRef,
  Suspense,
  useMemo,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Fade from "react-reveal/Fade";
import * as S from "./styles";

function Sector1() {
  const Text = () => {
    const font = useLoader(THREE.FontLoader, "/font/Roboto_Regular.json");
    const config = useMemo(() => ({ font: font, size: 20, height: 2 }), [font]);

    const mesh = useRef();
    const { viewport } = useThree();

    const [size, setSize] = useState(new THREE.Vector3());
    useLayoutEffect(() => {
      const temp = new THREE.Vector3();
      mesh.current.geometry.computeBoundingBox();
      mesh.current.geometry.boundingBox.getSize(temp);
      setSize(temp);
    }, []);
    useFrame((state) => {
      if (mesh.current) {
        const t = state.clock.elapsedTime;
        mesh.current.position.x =
          Math.sin(t) * 10 + (state.mouse.x * viewport.width) / 2 - size.x / 2;
        mesh.current.position.y =
          viewport.height * 2 * Math.exp(-3 * t) * Math.cos(t * 3) +
          (state.mouse.y * viewport.height) / 2 -
          size.y / 2;
        mesh.current.rotation.y = -state.mouse.x * 0.1;
        mesh.current.scale.setScalar(
          1 + Math.cos(t) * 0.1 + Math.sin(t * 0.3) * 0.2
        );
      }
    });

    return (
      <mesh ref={mesh}>
        <textGeometry attach="geometry" args={["HELLO", config]} />
        <meshStandardMaterial attatch="material" />
      </mesh>
    );
  };

  const Intro = () => {
    return (
      <S.IntroText>
        My name is Jeanyoon Choi, a student frontend developer with a year of
        experience, and I am excited to apply for the Meta’s FEE intern position
        this summer.
      </S.IntroText>
    );
  };

  const ScrollDown = () => {
    return (
      <S.ScrollContainer>
        <Fade top>
          <S.Text>Scroll Down</S.Text>
        </Fade>
      </S.ScrollContainer>
    );
  };

  return (
    <S.StyledSector1>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 100, position: [0, 0, 100] }}>
        <color attach="background" args={["black"]} />
        <Stars count={2000} factor={3} />
        <ambientLight intensity={0.2} />
        <directionalLight
          intensity={3}
          color={"#fff"}
          position={[100, 0, 100]}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <Suspense fallback={null}>
          <Text />
        </Suspense>
      </Canvas>
      <Intro />
      <ScrollDown />
    </S.StyledSector1>
  );
}
export default Sector1;

Sector1.propTypes = {};
