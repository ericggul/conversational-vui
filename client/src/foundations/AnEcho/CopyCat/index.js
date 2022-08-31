import React from "react";
import * as S from "./styles";

import Cat from "@ST/image/cat.svg";

function CopyCat({ triggerAnimate }) {
  return (
    <S.StyledCopyCat triggerAnimate={triggerAnimate}>
      <S.CatImage>
        <img src={Cat} />
      </S.CatImage>
      <S.Text>PROUDLY COPYING</S.Text>
    </S.StyledCopyCat>
  );
}
export default CopyCat;
