import React, { useRef, Suspense, useMemo } from "react";
import * as S from "./styles";

//Three
import * as THREE from "three";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

//Icons
import glsl from "babel-plugin-glsl/macro";

const getRandom = (a, b) => Math.random() * (b - a) + a;

const WaveShaderMaterial = shaderMaterial(
  //uniforms
  { uTime: 0, uColor: new THREE.Color(0, 0, 0), uTexture: new THREE.Texture(), uAmplitude: 0, uFreq: 0, uWaveAmpl: 0, uMode: 0, uDistortion: new THREE.Vector3(0, 0, 0) },
  //vertext shader
  glsl`
  precision mediump float;

  varying vec2 vUv;
  varying float vWave;
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uFreq;
  uniform int uMode;
  uniform vec3 uDistortion;
  
  #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
  #pragma glslify: cnoise3 = require(glsl-noise/classic/3d);
  #pragma glslify: pnoise3 = require(glsl-noise/periodic/3d);

  float M_PI = 3.141592;

  void main(){
    vUv = uv;

    vec3 pos = position;
    float noiseFreq = uFreq;
    float noiseAmp = uAmplitude;

    vec3 noisePos = vec3(pos.x * noiseFreq, pos.y + sin(uv.y * M_PI) * 0.1, pos.z);
    pos.x += cnoise3(noisePos) * noiseAmp * uDistortion.x;
    pos.y += cnoise3(noisePos) * noiseAmp * uDistortion.y;
    pos.z += snoise3(noisePos) * noiseAmp * uDistortion.z;
    vWave = pos.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,

  // vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset){
  //   position.x = position.x + (sin(uv.y * M_PI) * offset.x);
  //   position.y = position.y + (sin(uv.x * M_PI) * offset.y);
  //   return position;
  // }

  // void main(){
  //   vUv = uv;
  //   vec3 newPosition = deformationCurve(position, uv, uOffset);
  //   gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  // }
  glsl`
  precision mediump float;

  uniform vec3 uColor;
  uniform float uTime;
  uniform sampler2D uTexture;
  uniform float uWaveAmpl;

  varying vec2 vUv;
  varying float vWave;

  void main(){
    float wave = vWave * uWaveAmpl;
    vec3 texture = texture2D(uTexture, vUv + wave).rgb;
    gl_FragColor = vec4(texture, 1.0);
  }`
);

// vec3 rgbShift(sampler2D textureimage, vec2 uv, vec2 offset ){
//   float r = texture2D(textureimage, uv + offset).r;
//   vec2 gb = texture2D(textureimage, uv).gb;
//   return vec3(r, gb);
// }

// void main(){
//   // vec3 color = texture2D(uTexture, vUv).rgb;
//   vec3 color = rgbShift(uTexture, vUv, uOffset);
//   gl_FragColor = vec4(color, uAlpha);
// }

extend({ WaveShaderMaterial });

const Wave = ({ imgUrl, length }) => {
  const ref = useRef(null);

  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
  const [image] = useLoader(THREE.TextureLoader, [imgUrl]);
  const uAmplFirstOrder = useMemo(() => getRandom(0.05, 0.15), [imgUrl]);
  const uAmplSecondOrder = useMemo(() => getRandom(0.01, 0.05), [imgUrl]);
  const freq = useMemo(() => getRandom(-0.4, 0.4), [imgUrl]);
  const uWaveAmpl = useMemo(() => getRandom(0.5, 1), [imgUrl]);
  const uMode = useMemo(() => Math.floor(getRandom(0, 3), [imgUrl]));
  const uDistortion = useMemo(() => new THREE.Vector3(getRandom(0, 0.5), getRandom(0, 0.5), getRandom(0.5, 1)), [imgUrl]);

  return (
    <mesh>
      <planeBufferGeometry args={[3.0, 2.25, 50, 50]} />
      <waveShaderMaterial
        uColor={"white"}
        ref={ref}
        uTexture={image}
        uAmplitude={length * uAmplFirstOrder + length ** 2 * uAmplSecondOrder}
        uFreq={freq}
        uWaveAmpl={uWaveAmpl}
        uMode={uMode}
        uDistortion={uDistortion}
      />
    </mesh>
  );
};

const Scene = (props) => {
  return (
    <S.CanvasWrapper>
      <Canvas camera={{ fov: 12, position: [0, 0, 7] }}>
        <color attach="background" args={["transparent"]} />
        <Suspense fallback={null}>
          <Wave {...props} />
        </Suspense>
      </Canvas>
    </S.CanvasWrapper>
  );
};

function ImageElement({ imgUrl, record }) {
  return (
    <S.Container>
      {record && record.text.length > 0 && <Scene imgUrl={imgUrl} length={record.text.length} />}
      <S.Img src={imgUrl} />
    </S.Container>
  );
}
export default ImageElement;
