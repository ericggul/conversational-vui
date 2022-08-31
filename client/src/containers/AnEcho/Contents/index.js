import React, { useState, useEffect, useRef, useCallback } from "react";
import * as S from "./styles";

//confetti
import ReactCanvasConfetti from "react-canvas-confetti";

//containers
import TextLevel from "./TextLevel";

//fooundations
import ExceptSpouseAndChildren from "@F/AnEcho/TextLevel/ExceptSpouseAndChildren";
import BreakingNews from "@F/AnEcho/BreakingNews";
import Pointer from "@F/AnEcho/Pointer";
import Time from "@F/AnEcho/Time";
import TeslaLeft from "@F/AnEcho/TeslaLeft";
import TeslaRight from "@F/AnEcho/OverLevel/TeslaRight";
import Weather from "@F/AnEcho/Weather";
import WhiteGrid from "@F/AnEcho/WhiteGrid";
import AmazonSmile from "@/foundations/AnEcho/OverLevel/AmazonSmile";
import Camel from "@F/AnEcho/Camel";
import Baby from "@/foundations/AnEcho/OverLevel/Baby";
import Taang from "@F/AnEcho/Taang";
import InvisibleHand from "@/foundations/AnEcho/OverLevel/InvisibleHand";
import Malkovich from "@/foundations/AnEcho/OverLevel/Malkovich";
import Cone from "@F/AnEcho/Cone";
import Webcam from "@F/AnEcho/Webcam";
import Sun from "@F/AnEcho/Sun";
import Likes from "@/foundations/AnEcho/OverLevel/Likes";
import CopyCat from "@/foundations/AnEcho/OverLevel/CopyCat";

import Clock from "@F/AnEcho/Clock";

function AnEcho({ current }) {
  const [word, setWord] = useState("metaverse AI blockchain");

  //webcam img send to camel and baby
  const [webcamImg, setWebcamImg] = useState(null);
  function handleWebcamImg(data) {
    setWebcamImg(data);
  }

  const [clicked, setClicked] = useState(0);

  const throttle = (func) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = setTimeout(() => (inThrottle = false), 700);
      }
    };
  };

  useEffect(() => {
    document.addEventListener("click", throttle(handleClick));
    return () => document.removeEventListener("click", throttle(handleClick));
  }, []);

  function handleClick() {
    setClicked((cl) => cl + 1);
  }

  //conffetti
  const canvasStyles = {
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  };

  const getAnimationSettings = () => {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 10,
      particleCount: 150,
      colors: ["#ffffff"],
      origin: {
        x: 0.5,
        y: 0.5,
      },
    };
  };
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState(null);
  const getInstance = (instance) => (refAnimationInstance.current = instance);
  const nextTickAnimation = () => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings());
    }
  };

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  useEffect(() => {
    if (clicked > 60) {
      startAnimation();

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [clicked, intervalId]);

  return (
    <S.StyledAnEcho>
      <S.XAxis />

      <S.ShapeLevel clicked={clicked}>
        <TextLevel word={word} />
        <Pointer />
        <Time />
        <Weather />
        <ExceptSpouseAndChildren />
        <WhiteGrid />
        <BreakingNews />
        <Cone />
        <Taang />
        <Camel />
        <Sun />
        <TeslaLeft />
      </S.ShapeLevel>
      <S.OverLevel>
        <CopyCat triggerAnimate={clicked > 8} />
        <Malkovich triggerAnimate={clicked > 17} />
        <TeslaRight triggerAnimate={clicked > 29} />
        <InvisibleHand triggerAnimate={clicked > 33} />
        <Baby webcamImg={webcamImg} triggerAnimate={clicked > 45} />
        <AmazonSmile triggerAnimate={clicked > 43} />
        <Likes triggerAnimate={clicked > 21} />
      </S.OverLevel>

      <Webcam tossData={handleWebcamImg} />

      <Clock />
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </S.StyledAnEcho>
  );
}
export default AnEcho;
