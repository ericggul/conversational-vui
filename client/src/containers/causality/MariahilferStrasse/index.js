import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
import * as S from "./styles";
import useSocketInput from "utils/hooks/causeAndEffect/useSocketInput";

function MariahilferStrasse() {
  const triggered = useSocketInput();
  return <S.Container triggered={triggered}></S.Container>;
}
export default MariahilferStrasse;
