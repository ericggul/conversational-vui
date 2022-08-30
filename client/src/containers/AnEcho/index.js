import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

//containers
import TextLevel from "./TextLevel";

//fooundations
import Pointer from "@F/AnEcho/Pointer";
import Time from "@F/AnEcho/Time";
import Weather from "@F/AnEcho/Weather";
import WhiteGrid from "@F/AnEcho/WhiteGrid";
import AmazonSmile from "@F/AnEcho/AmazonSmile";
import CamelAndBaby from "@F/AnEcho/CamelAndBaby";
import Taang from "@F/AnEcho/Taang";
import InvisibleHand from "@F/AnEcho/InvisibleHand";
import Malkovich from "@F/AnEcho/Malkovich";
import Cone from "@F/AnEcho/Cone";
import Webcam from "@F/AnEcho/Webcam";
import Sun from "@F/AnEcho/Sun";
import DollarSign from "@F/AnEcho/DollarSign";
import Sns from "@F/AnEcho/Sns";
import Likes from "@F/AnEcho/Likes";

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

    if (nowRef.current - thenRef.current > 3) {
      let time = nowRef.current - startRef.current;
      thenRef.current = Date.now();

      //do with time
      if (time > 6000) {
        setActivateCone(true);
      }
      if (time > 12000) {
        cancelAnimationFrame(animationRef.current);
      }
      animateWord(time);
    }
  }

  const SECONDS = 15;
  function animateWord(t) {
    setYPos(t * (2 / SECONDS));
    setScale(Math.exp(-t * 0.0002) * (0.85 + Math.cos((t * Math.PI) / 1000) * 0.15));
  }

  //webcam img send to camel and baby
  const [webcamImg, setWebcamImg] = useState(null);
  function handleWebcamImg(data) {
    setWebcamImg(data);
  }

  return (
    <S.StyledAnEcho>
      <S.XAxis />

      <TextLevel triggerAnimate={triggerAnimate} word={word} />
      <S.WordLevel>
        <S.Word style={{ transform: `translateY(${yPos - 75}px) scale(${scale})` }}>{word}</S.Word>
      </S.WordLevel>

      <S.ShapeLevel triggerAnimate={triggerAnimate}>
        <Pointer />
        <Time />
        <Weather />
        <Sns />
        <WhiteGrid />
        {/* <Likes /> */}
        <Cone />
        <Taang />
        <InvisibleHand />
        <CamelAndBaby webcamImg={webcamImg} />
        <Malkovich />
        <Webcam tossData={handleWebcamImg} />
        <AmazonSmile />
        <DollarSign />
        <Sun />
      </S.ShapeLevel>

      <Clock />
    </S.StyledAnEcho>
  );
}
export default AnEcho;
