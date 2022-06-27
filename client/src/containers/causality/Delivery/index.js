import React, { useEffect, useMemo, useRef, useState } from "react";
import Main from "./Main";
import * as S from "./styles";
import useResize from "@U/hooks/useResize";

import ReactCanvasConfetti from "react-canvas-confetti";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function ScreenTesting() {
  const [windowWidth, windowHeight] = useResize();
  //confetti
  const canvasStyles = {
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    zIndex: 20,
  };

  const getAnimationSettings = (x, y) => {
    return {
      startVelocity: 20,
      spread: 360,
      ticks: 120,
      zIndex: 10,
      particleCount: 150,
      origin: {
        x,
        y,
      },
    };
  };

  const refAnimationInstance = useRef(null);
  const getInstance = (instance) => (refAnimationInstance.current = instance);

  function handleClick(e) {
    if (refAnimationInstance) {
      refAnimationInstance.current(getAnimationSettings(e.clientX / windowWidth - 0.1, e.clientY / windowHeight + 0.03));
      refAnimationInstance.current(getAnimationSettings(e.clientX / windowWidth + 0.1, e.clientY / windowHeight - 0.03));
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [refAnimationInstance]);

  return (
    <S.StyledDeliveryUI>
      <S.InnerContainer>
        <Main />
      </S.InnerContainer>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </S.StyledDeliveryUI>
  );
}
export default ScreenTesting;
