import React from "react";
import * as S from "./styles";

import CamelImg from "@ST/image/camel.svg";
import BabyImg from "@ST/image/baby.svg";

function CamelAndBaby() {
  return (
    <>
      <S.CamelZone>
        {new Array(8).fill(0).map((_, i) => (
          <S.Camel key={i}>
            <img src={CamelImg} />
          </S.Camel>
        ))}
      </S.CamelZone>

      <S.Baby>
        <img src={BabyImg} />
      </S.Baby>
    </>
  );
}
export default CamelAndBaby;
