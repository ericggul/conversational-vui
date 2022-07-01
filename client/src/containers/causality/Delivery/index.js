import React, { useEffect, useMemo, useRef, useState } from "react";
import Main from "./Main";
import * as S from "./styles";
import useResize from "@U/hooks/useResize";

import ReactCanvasConfetti from "react-canvas-confetti";

import { Helmet } from "react-helmet-async";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function ScreenTesting() {
  //ments
  useEffect(() => {
    console.log(`Delivery Application is one of the most visited application interface in our daily lives.`);
    console.log(`It represents the modern platform economy.`);
    console.log(
      `Inside such platform economy, every different element(in this case, a restaurant), regardless of its aura, are treated as a similar component, with all its specifications are converted into quantified numbers: Raitings, Delivery Fee, etc.`
    );
    console.log(`Such a quantification always comes with benefits and drawbacks, with notable drawbacks containing dehumanisation of the element.`);
    console.log(
      `This artwork symbolically distorts such a ordered and structured platform interace, arguing that we need unique website with unforgettable characteristics as much as we need platformatic interfaces.`
    );
  }, []);

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
    <>
      <Helmet>
        <title>Causality</title>
      </Helmet>
      <S.StyledDeliveryUI>
        <S.InnerContainer>
          <Main />
        </S.InnerContainer>
        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      </S.StyledDeliveryUI>
    </>
  );
}
export default ScreenTesting;
