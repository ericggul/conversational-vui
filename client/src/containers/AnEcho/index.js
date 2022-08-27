import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

//fooundations
import Malkovich from "@F/AnEcho/Malkovich";
import Cone from "@F/AnEcho/Cone";
import Clock from "@F/AnEcho/Clock";

function AnEcho() {
  const word = "Schumpeterstrasse";

  const [yPos, setYPos] = useState(0);
  const [scale, setScale] = useState(1);

  const startRef = useRef(Date.now());
  const nowRef = useRef(Date.now());
  const thenRef = useRef(Date.now());
  const animationRef = useRef(null);

  useEffect(() => {
    const testingTimeout = setTimeout(() => {
      startRef.current = Date.now();
      animate();
    }, 2000);
    return () => clearTimeout(testingTimeout);
  }, []);

  const [activateCone, setActivateCone] = useState(false);

  function animate() {
    animationRef.current = requestAnimationFrame(animate);
    nowRef.current = Date.now();

    if (nowRef.current - thenRef.current > 3) {
      let time = nowRef.current - startRef.current;
      thenRef.current = Date.now();

      //do with time
      if (time > 6000) {
        setActivateCone(true);
      }
      animateWord(time);
    }
  }

  const SECONDS = 12;
  function animateWord(t) {
    setYPos((t * (2 / SECONDS)) % 2000);
    setScale(Math.exp(-t * 0.0002) * (0.85 + Math.cos((t * Math.PI) / 1000) * 0.15));
  }

  return (
    <S.StyledAnEcho>
      <S.XAxis />
      <S.YAxis />

      <S.WordLevel>
        <S.Word style={{ transform: `translateY(${yPos - 75}px) scale(${scale})` }}>{word}</S.Word>
      </S.WordLevel>

      {activateCone && <Cone />}
      <Malkovich />
      <Clock />
    </S.StyledAnEcho>
  );
}
export default AnEcho;
