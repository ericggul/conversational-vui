import React, { useState } from "react";
import * as S from "./styles";

import Clock from "@F/flux/UIUtils/clock";

export default function UIUtils({
  current,
  clicked,
  resetPos,
  realTimeMode,
  alterTimeMode,
}) {
  return (
    <S.UtilsContainer>
      <S.RealTimeModal>
        Real Time Mode
        <S.Box>
          <S.El selected={realTimeMode} onClick={() => alterTimeMode(true)}>
            {"On"}
          </S.El>
          <S.El selected={!realTimeMode} onClick={() => alterTimeMode(false)}>
            {"Off"}
          </S.El>
        </S.Box>
      </S.RealTimeModal>

      <Clock current={current} clicked={clicked} realTime={realTimeMode} />
      <S.ResetPosition onClick={resetPos}>
        Reset Perspective Position
      </S.ResetPosition>
    </S.UtilsContainer>
  );
}
