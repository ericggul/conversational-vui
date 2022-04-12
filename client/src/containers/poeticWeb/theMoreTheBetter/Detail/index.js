import { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";
import HydraComp from "@F/poeticWeb/TheMoreTheBetter/HydraComp";
import ContentsComp from "@F/poeticWeb/TheMoreTheBetter/ContentsComp";
import ContentsComp2 from "@F/poeticWeb/TheMoreTheBetter/ContentsComp2";
import DerHolle from "@F/poeticWeb/TheMoreTheBetter/DerHolle";
import { useHistory } from "react-router-dom";

export default function WebText(props) {
  const history = useHistory();
  const [news, setNews] = useState(history.location.state.newsSets);
  const containerRef = useRef();

  return (
    <S.Container ref={containerRef}>
      <HydraComp />
      {/* <DerHolle /> */}
      <ContentsComp2 news={news} />
    </S.Container>
  );
}
