import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import * as S from "./styles";
import useSocketInput from "utils/hooks/causeAndEffect/useSocketInput";

function MariahilferStrasse() {
  useEffect(() => {
    console.log(`Named after the street in Vienna, where this project was inspired, Mariahilferstrasse shows symbollically how our 'active interaction' within the web space can trigger a change.`);
    console.log(`No spectators, before experincing through the piece, would expect that their act of typing should trigger a change in the colour of screen behind them.`);
    console.log(`The connection between the cause(input) and the effect(Change in screen colour) is so direct and simple, that its simplicity is a factor which amazes us.`);
    console.log(`The causality is so simple that it shocks us: It is so simple to put any narrative within this action.`);
  }, []);

  const triggered = useSocketInput();
  return <S.Container triggered={triggered}></S.Container>;
}
export default MariahilferStrasse;
