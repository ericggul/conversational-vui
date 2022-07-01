import React, { useState, useMemo, useEffect, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { BsSearch } from "react-icons/bs";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;
const getRandomColor = () => `hsl(${getRandom(0, 350)}, 100%,${getRandom(40, 60)}%)`;

function Input() {
  useEffect(() => {
    console.log(`Causality: Input: useEffect`);
    console.log(`\n`);
    console.log(`Causality: Input: useEffect: socket`);
    console.log(`Causality: Input: useEffect: socket: io`);
    console.log(`Causality: Input: useEffect: socket: io: socket`);
    console.log(`Causality: Input: useEffect: socket: io: socket: emit`);

    console.log(`\n`);
    console.log(`Causality is a web dada project, consisted of one input panel and five independent artworks.`);
    console.log(`Each of artwork suddenly changes according to the user's input.`);
    console.log(`This artwork criticises our tendency to heavily rely on causality on explaining events.`);
  }, []);
  const [text, setText] = useState("");
  const [highState, setHighState] = useState(false);
  const socket = useMemo(() => io({ transports: ["websocket"] }), []);

  const [color, setColor] = useState(getRandomColor());

  const handleChange = (e) => {
    const thisColor = getRandomColor();
    socket.emit("simple input 1");
    socket.emit("simple input 2", { text: e.target.value, color: thisColor });
    setColor(thisColor);
    setText(e.target.value);
    setHighState(true);
    setTimeout(() => {
      setHighState(false);
    }, 300);
  };

  const handleButtonClick = () => {
    socket.emit("input send", text);
    setText("");
  };

  const timeout = useRef(null);
  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (text !== "") {
      timeout.current = setTimeout(() => {
        setText("");
        socket.emit("simple input 2", { text: "", color: `red` });
      }, 15000);
    }
  }, [text]);

  return (
    <S.Container highState={highState} color={color}>
      <S.Inner>
        <S.Circle highState={highState} color={color} rotate={text.length - 6}>
          <S.Input value={text} onChange={handleChange} placeholder={"CAUSALITY"} />
        </S.Circle>
      </S.Inner>
      {text.length > 1 && <S.ButtonTop onClick={handleButtonClick} />}
      {text.length > 2 && <S.ButtonBottom onClick={handleButtonClick} />}
      <S.ButtonLeft transit={text.length - 4} onClick={handleButtonClick}>
        !
      </S.ButtonLeft>
      <S.ButtonRight transit={text.length - 5} onClick={handleButtonClick}>
        !
      </S.ButtonRight>
    </S.Container>
  );
}
export default Input;
