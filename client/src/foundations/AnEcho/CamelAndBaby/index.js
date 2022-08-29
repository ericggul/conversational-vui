import React from "react";
import * as S from "./styles";

import CamelImg from "@ST/image/camel.svg";
import BabyImg from "@ST/image/baby.svg";

function CamelAndBaby({ webcamImg }) {
  return (
    <>
      <S.CamelZone>
        <S.CamelRow>
          {new Array(8).fill(0).map((_, i) => (
            <S.Camel key={i}>
              <img src={CamelImg} />
            </S.Camel>
          ))}
        </S.CamelRow>
        <S.CamelRow>
          {new Array(8).fill(0).map((_, i) => (
            <S.Camel key={i}>
              <img src={CamelImg} />
            </S.Camel>
          ))}
        </S.CamelRow>
        <S.CamelRow>
          {new Array(8).fill(0).map((_, i) => (
            <S.Camel key={i}>
              <img src={CamelImg} />
            </S.Camel>
          ))}
        </S.CamelRow>
      </S.CamelZone>

      <S.BabyZone>
        <S.Baby>
          <img src={BabyImg} />
        </S.Baby>

        {webcamImg &&
          new Array(12).fill(0).map((_, i) => (
            <S.SurroundingFace key={i} style={{ transform: `translate(${160 * Math.cos((Math.PI * i) / 6)}px, ${160 * Math.sin((Math.PI * i) / 6)}px) rotate(${i * 30}deg)` }}>
              <img src={webcamImg} />
            </S.SurroundingFace>
          ))}
      </S.BabyZone>
    </>
  );
}
export default CamelAndBaby;
