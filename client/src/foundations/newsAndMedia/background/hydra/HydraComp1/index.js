import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";
import useResize from "@U/hooks/useResize";
import Hydra from "hydra-synth";

const getRandom = (a, b) => Math.random() * (b - a) + a;

const HydraComp = () => {
  const canvasRef = useRef();

  const [windowWidth, windowHeight] = useResize();
  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = windowWidth;
      canvasRef.current.height = windowHeight / 3;
      const h = new Hydra({ makeGlobal: false, canvas: canvasRef.current, detectAudio: false }).synth;
      const { src, osc, gradient, shape, voronoi, noise, s0, s1, s2, s3, o0, o1, o2, o3, render } = h;
      h.shape(5, 0.3, 0.3)
        .diff(
          shape(5, 0.2, 0.5)
            .color(getRandom(3, 4), getRandom(1, 2), getRandom(0, 3))
            .rotate(Math.PI / 5)
        )
        .rotate(1, 0.03)
        .add(shape(5, 0.01, 0.4).modulate(noise(3)))
        .out();

      h.osc(30, 0.1, 0.3)
        .color(1, 0.2, 14)
        .add(noise(3))
        .blend(voronoi(3, 0.1, 1).repeat(3, 3))
        .kaleid(10)
        .modulate(noise(3).kaleid(3))
        .blend(
          osc(10, 0.1, 4)
            .modulate(noise(3).modulate(noise(10).kaleid(3)))
            .color(getRandom(0.5, 1.5), 0.2, getRandom(1, 20))
        )
        .out();
    }
  }, [canvasRef]);

  return (
    <S.ElementContainer>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </S.ElementContainer>
  );
};

export default HydraComp;
