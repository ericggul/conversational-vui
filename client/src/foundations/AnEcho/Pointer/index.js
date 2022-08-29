import React from "react";
import * as S from "./styles";

import FingerImg from "@ST/image/finger.svg";

function Pointer() {
  return (
    <S.StyledPointer>
      <img src={FingerImg} />
    </S.StyledPointer>
  );
}
export default Pointer;
