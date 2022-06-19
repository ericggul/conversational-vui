import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";

import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function ScreenTesting() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  function handleAlter() {
    setShow(true);
  }

  async function handleAxiosTest() {
    try {
      let res = await axios.post("http://localhost:8000/openai", {
        animal: "Henry",
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleAxiosTest();
    document.addEventListener("click", handleAlter);
    return () => document.removeEventListener("click", handleAlter);
  }, []);

  const [color, setColor] = useState(`hsl(${getRandom(0, 350)}, 100%, 50%)`);
  useEffect(() => {
    const interval = setInterval(() => setColor(`hsl(${getRandom(0, 350)}, 100%, 50%)`), 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Container>
      <S.Text show={show} color={color}>
        BOOYAH
      </S.Text>
    </S.Container>
  );
}
export default ScreenTesting;
