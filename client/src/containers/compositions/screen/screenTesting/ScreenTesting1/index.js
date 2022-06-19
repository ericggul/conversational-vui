import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function ScreenTesting() {
  const [triggered, setTriggered] = useState(false);
  const socket = useMemo(() => io("http://localhost:8000"), []);

  useEffect(() => {
    if (triggered) {
      const timeout = setTimeout(() => {
        setTriggered(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [triggered]);

  const handleSocketInput = () => {
    console.log("handle socket input");
    setTriggered(true);
  };

  useEffect(() => {
    socket.on("simple input", handleSocketInput);
    document.addEventListener("click", () => setTriggered(true));
    return () => {
      document.removeEventListener("click", () => setTriggered(true));
      socket.off("simple input", handleSocketInput);
    };
  }, []);

  return <S.Container triggered={triggered}></S.Container>;
}
export default ScreenTesting;
