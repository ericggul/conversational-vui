import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function MariahilferStrasse() {
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
    setTriggered(true);
  };

  useEffect(() => {
    socket.on("input", handleSocketInput);

    return () => {
      socket.off("input", handleSocketInput);
    };
  }, []);

  return <S.Container triggered={triggered}></S.Container>;
}
export default MariahilferStrasse;
