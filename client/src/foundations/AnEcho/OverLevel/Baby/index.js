import React from "react";
import * as S from "./styles";
import BabyImg from "@ST/image/baby.svg";

function Baby({ webcamImg, triggerAnimate }) {
  return (
    <S.BabyZone>
      <S.Baby triggerAnimate={triggerAnimate}>
        <img src={BabyImg} />
      </S.Baby>

      {webcamImg &&
        new Array(12).fill(0).map((_, i) => (
          <S.SurroundingFace
            key={i}
            style={{ transform: `translate(${160 * Math.cos((Math.PI * i) / 6)}px, ${160 * Math.sin((Math.PI * i) / 6)}px) rotate(${i * 30}deg)`, animationDelay: `${1 + i * 0.1}s` }}
            triggerAnimate={triggerAnimate}
          >
            <img src={webcamImg} />
          </S.SurroundingFace>
        ))}
    </S.BabyZone>
  );
}
export default Baby;
