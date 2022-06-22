import React, { useEffect, useMemo, useRef, useState } from "react";
import Main from "./Main";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function ScreenTesting() {
  return (
    <S.StyledDeliveryUI>
      <S.InnerContainer>
        <Main />
      </S.InnerContainer>
    </S.StyledDeliveryUI>
  );
}
export default ScreenTesting;
