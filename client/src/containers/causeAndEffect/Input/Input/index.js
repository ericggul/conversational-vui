import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;
const getRandomColor = () => `hsl(${getRandom(50, 300)}, 100%, 50%)`;

function Input() {
  const [text, setText] = useState("");
  const [highState, setHighState] = useState(false);
  const socket = useMemo(() => io("http://localhost:8000"), []);

  const [color, setColor] = useState(getRandomColor());

  const handleChange = (e) => {
    socket.emit("simple input");
    setColor(getRandomColor());
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

  return (
    <S.Container highState={highState} color={color}>
      <S.Inner>
        <S.Circle highState={highState} color={color} rotate={text.length - 6}>
          <S.Input value={text} onChange={handleChange} />
        </S.Circle>
      </S.Inner>
      {text.length > 1 && <S.ButtonTop onClick={handleButtonClick} />}
      {text.length > 2 && <S.ButtonBottom onClick={handleButtonClick} />}
      <S.ButtonLeft transit={text.length - 4} onClick={handleButtonClick}>
        X
      </S.ButtonLeft>
      <S.ButtonRight transit={text.length - 5} onClick={handleButtonClick}>
        X
      </S.ButtonRight>
    </S.Container>
  );
}
export default Input;
