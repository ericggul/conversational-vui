import React from "react";
import * as S from "./styles";

import AmazonImage from "@ST/image/amazon.svg";

function AmazonSmile({ triggerAnimate }) {
  return (
    <S.Smile triggerAnimate={triggerAnimate}>
      <img src={AmazonImage} />
    </S.Smile>
  );
}
export default AmazonSmile;
