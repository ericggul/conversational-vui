import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";
import useResize from "@U/hooks/useResize";
import Hydra from "hydra-synth";

import { pattern4, uncovered, diverging, movement, breaken, rose2, untitled, roseRainbow, twelveFiftyThree, pattern1, oneFourteen } from "./scripts";

const getRandom = (a, b) => Math.random() * (b - a) + a;

const HydraComp = () => {
  const canvasRef = useRef();

  const [windowWidth, windowHeight] = useResize();

  const ARRAYS = [pattern4, uncovered, diverging, movement, breaken, rose2, untitled, roseRainbow, twelveFiftyThree, pattern1, oneFourteen];
  const randomIdx = Math.floor(getRandom(0, ARRAYS.length));
  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = windowWidth;
      canvasRef.current.height = windowHeight / 3;
      const h = new Hydra({ makeGlobal: false, canvas: canvasRef.current, detectAudio: false }).synth;

      let func = ARRAYS[randomIdx];

      func(h);
    }
  }, [canvasRef]);

  return (
    <S.ElementContainer>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </S.ElementContainer>
  );
};

export default HydraComp;
