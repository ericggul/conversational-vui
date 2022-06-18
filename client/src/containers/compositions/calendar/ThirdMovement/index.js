import React, { useEffect, useMemo, useState, useRef, useCallback } from "react";
import axios from "axios";
import { debounce } from "@U/functions/timer";
import useResize from "@U/hooks/useResize";
import * as S from "./styles";
import "./styles.css";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function MonthDisplayer({ year, month, moveToNextMovement }) {
  const containerRef1 = useRef();

  const [windowWidth, windowHeight] = useResize();

  const [UIVersion, setUIVersion] = useState(0);
  const [crazyLevel, setCrazyLevel] = useState(0);

  const addElement = (x, y, size, number) => {
    const el = document.createElement("div");

    el.className = "date-el";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.fontSize = `${size * 0.7}px`;
    el.style.transform = `translate(-50%, -50%)`;
    el.style.color = "white";
    el.style.background = `transparent`;
    el.style.border = `${size * 0.1}px solid white`;
    let delay = getRandom(0, 0.5);
    el.style.animationDelay = `${delay}s`;
    el.innerHTML = number;

    containerRef1.current.appendChild(el);
  };

  const elementGenerator = (xPos, yPos, number) => {
    const generatedNumber = crazyLevel - 1;
    let r = 0;
    let angle = 0;
    let size = 40;
    let angleIncrement = getRandom(-0.02, 0.02);

    if (generatedNumber === -1) {
      addElement(xPos, yPos, 40, number);
    }
    for (let i = 0; i < generatedNumber; i++) {
      size = getRandom(0, getRandom(20, 20));
      // size = getRandom(getRandom(getRandom(0, 20), 30), getRandom(50, 100));
      r += size * 0.6;
      angle += Math.PI * angleIncrement;
      for (let j = 0; j < 4; j++) {
        angle += Math.PI / 2;
        addElement(xPos + r * Math.cos(angle), yPos + r * Math.sin(angle), size, number);
      }
      r += size * 0.6;
    }
  };

  const converTTS = async (number) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/tts",
        { text: `What are you doing on January ${number}?` },
        {
          responseType: "arraybuffer",
          "Access-Control-Allow-Origin": "*",
        }
      );
      console.log(res.data);

      //play audio
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();
      const audioBuffer = await audioContext.decodeAudioData(res.data);
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();
      console.log(source);
    } catch (e) {
      console.log(e);
    }
  };

  const [backgroundWhite, setBackgroundWhite] = useState(1);
  useEffect(() => {
    if (crazyLevel > 40) {
      const interval = setInterval(() => {
        setBackgroundWhite((w) => Math.floor(w * 1.1) + 1);
        elementGenerator(getRandom(0, windowWidth), getRandom(0, windowHeight), Math.floor(getRandom(1, 99)));
      }, 400);
      return () => clearInterval(interval);
    }
  }, [crazyLevel]);

  const handleClick = (e) => {
    if (crazyLevel <= 45) {
      const number = Math.floor(getRandom(1, 31));

      e.preventDefault();
      setCrazyLevel((lv) => lv + 1);
      elementGenerator(e.clientX, e.clientY, number);
      converTTS(number);
    }
  };

  //click event
  useEffect(() => {
    if (containerRef1 && containerRef1.current) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [containerRef1, crazyLevel]);

  const handleUIVersionUpdate = () => {
    if (UIVersion < 9) {
      setUIVersion((e) => e + 1);
      return;
    }

    setTimeout(() => {
      moveToNextMovement();
    }, 1000);
  };

  return (
    <S.WholeContainer white={backgroundWhite}>
      <S.Dummy1 ref={containerRef1} />
    </S.WholeContainer>
  );
}
export default MonthDisplayer;
