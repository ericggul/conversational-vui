import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

//containers
import TextLevel from "./TextLevel";

//fooundations
import ExceptSpouseAndChildren from "@F/AnEcho/TextLevel/ExceptSpouseAndChildren";
import BreakingNews from "@F/AnEcho/BreakingNews";
import Pointer from "@F/AnEcho/Pointer";
import Time from "@F/AnEcho/Time";
import Tesla from "@F/AnEcho/Tesla";
import Weather from "@F/AnEcho/Weather";
import WhiteGrid from "@F/AnEcho/WhiteGrid";
import AmazonSmile from "@F/AnEcho/AmazonSmile";
import Camel from "@F/AnEcho/Camel";
import Baby from "@F/AnEcho/Baby";
import Taang from "@F/AnEcho/Taang";
import InvisibleHand from "@F/AnEcho/InvisibleHand";
import Malkovich from "@F/AnEcho/Malkovich";
import Cone from "@F/AnEcho/Cone";
import Webcam from "@F/AnEcho/Webcam";
import Sun from "@F/AnEcho/Sun";
import Likes from "@F/AnEcho/Likes";
import CopyCat from "@F/AnEcho/CopyCat";

import Clock from "@F/AnEcho/Clock";

function AnEcho() {
  const [word, setWord] = useState("schumpeterstrasse");

  const [yPos, setYPos] = useState(0);
  const [scale, setScale] = useState(1);

  const startRef = useRef(Date.now());
  const nowRef = useRef(Date.now());
  const thenRef = useRef(Date.now());
  const animationRef = useRef(null);

  const [triggerAnimate, setTriggerAnimate] = useState(false);
  useEffect(() => {
    const testingTimeout = setTimeout(() => {
      startRef.current = Date.now();
      setTriggerAnimate(true);
      animate();
    }, 2000);
    return () => clearTimeout(testingTimeout);
  }, []);

  const [activateCone, setActivateCone] = useState(false);

  function animate() {
    animationRef.current = requestAnimationFrame(animate);
    nowRef.current = Date.now();

    if (nowRef.current - thenRef.current > 6) {
      let time = nowRef.current - startRef.current;
      thenRef.current = Date.now();

      //do with time
      if (time > 6000) {
        setActivateCone(true);
      }
      if (time > 31000) {
        cancelAnimationFrame(animationRef.current);
      }
      animateWord(time);
    }
  }

  const SECONDS = 30;
  function animateWord(t) {
    setYPos(t * (2 / SECONDS));
    //Math.exp(-t * 0.0001) *
    setScale((1 - t / (SECONDS * 1000)) * (0.85 + Math.cos((t * Math.PI) / 1000) * 0.15));
  }

  //webcam img send to camel and baby
  const [webcamImg, setWebcamImg] = useState(null);
  function handleWebcamImg(data) {
    setWebcamImg(data);
  }

  return (
    <S.StyledAnEcho
    // style={{ transform: `translate(${windowWidth / 2 - 2000 * containerScale}px, 0) scale(${containerScale})` }}
    >
      <S.XAxis />

      <TextLevel triggerAnimate={triggerAnimate} word={word} />
      <S.WordLevel>
        <S.Word style={{ transform: `translateY(${yPos - 75}px) scale(${scale})` }}>{word}</S.Word>
      </S.WordLevel>

      <S.ShapeLevel triggerAnimate={triggerAnimate}>
        <Pointer />
        <Time />
        <Weather />
        <ExceptSpouseAndChildren />
        <WhiteGrid />
        <BreakingNews />
        <Likes />
        <Cone />
        <Taang />
        <InvisibleHand />
        <Camel />
        <Malkovich />
        <Sun />
      </S.ShapeLevel>

      <CopyCat triggerAnimate={triggerAnimate} />
      <Baby webcamImg={webcamImg} triggerAnimate={triggerAnimate} />
      <Tesla triggerAnimate={triggerAnimate} />
      <AmazonSmile triggerAnimate={triggerAnimate} />
      <Webcam tossData={handleWebcamImg} />
      <Clock />
    </S.StyledAnEcho>
  );
}
export default AnEcho;
