import { useMemo, useState, useRef, useCallback } from "react";
import * as S from "./styles";
import HydraComp from "@F/poeticWeb/suggestions/HydraComp";
import ContentsComp from "@F/poeticWeb/suggestions/ContentsComp";

import { useHistory } from "react-router-dom";

export default function WebText(props) {
  const history = useHistory();
  const news = useMemo(() => history.location.state.newsSets, [history]);

  const containerRef = useRef();

  return (
    <S.Container ref={containerRef}>
      <HydraComp />
      <ContentsComp news={news} />
    </S.Container>
  );
}
