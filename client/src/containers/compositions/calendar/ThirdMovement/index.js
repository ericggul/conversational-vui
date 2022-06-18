import React, { useEffect, useMemo, useState, useRef, useCallback } from "react";
import axios from "axios";
import * as S from "./styles";
import "./styles.css";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function MonthDisplayer({ year, month, moveToNextMovement }) {
  const containerRef1 = useRef();
  const containerRef2 = useRef();
  const containerRef3 = useRef();

  const [UIVersion, setUIVersion] = useState(0);
  const [crazyLevel, setCrazyLevel] = useState(0);

  const addElement = (x, y) => {
    const el = document.createElement("div");

    const unitSize = getRandom(30, 60);
    el.className = "date-el";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.width = `${unitSize * 1.8}px`;
    el.style.height = `${unitSize * 1.8}px`;
    el.style.fontSize = `${unitSize}px`;
    el.style.transform = `translate(-50%, -50%)`;
    el.style.color = "white";
    el.style.background = `transparent`;
    el.style.border = `${getRandom(4, 8)}px solid hsl(${getRandom(0, 350)}, 100%, ${getRandom(50, 80)}%)`;
    el.style.animationDelay = `${getRandom(0, 0.5)}s`;
    el.innerHTML = Math.floor(getRandom(1, 31));

    containerRef1.current.appendChild(el);
    setTimeout(() => {
      containerRef1.current.removeChild(el);
    }, getRandom(2000, 2500));
  };

  const elementGenerator = useCallback(
    (e) => {
      const generatedNumber = Math.floor(getRandom(1, crazyLevel ** 1.2 + 1));
      const bounded = Math.min(20 * crazyLevel ** 1.2, 500);
      for (let i = 0; i < generatedNumber; i++) {
        addElement(e.clientX + getRandom(-bounded, bounded), e.clientY + getRandom(-bounded, bounded));
      }
    },
    [crazyLevel]
  );

  const converTTS = async () => {
    try {
      const res = await axios.post("http://localhost:8000/tts",{text: "awet 02 4krnbal 39!"}, {
      responseType: "arraybuffer",
      "Access-Control-Allow-Origin": "*",
    });
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

  const handleClick = (e) => {
    e.preventDefault();
    setCrazyLevel((lv) => lv + 1);
    elementGenerator(e);
    converTTS();
  };

  //click event
  useEffect(() => {
    if (containerRef1 && containerRef1.current && containerRef2 && containerRef2.current && containerRef3 && containerRef3.current) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [containerRef1, containerRef2, containerRef3, crazyLevel]);

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
    <S.WholeContainer>
      <S.Dummy1 ref={containerRef1} />
      <S.Dummy2 ref={containerRef2} />
      <S.Dummy3 ref={containerRef3} />
    </S.WholeContainer>
  );
}
export default MonthDisplayer;
