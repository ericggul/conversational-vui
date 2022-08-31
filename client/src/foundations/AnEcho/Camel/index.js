import React, { useMemo } from "react";
import * as S from "./styles";
import CamelImg from "@ST/image/camel.svg";

const getRandom = (a, b) => Math.random() * (b - a) + a;
function Camel() {
  const zoneBPos = useMemo(() => {
    return Array.from({ length: 3 }, () => Array.from({ length: 8 }, (_, i) => ({ rotation: getRandom(-i * 20, i * 20) })));
  }, []);

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

      <S.CamelZoneB>
        <S.CamelRow>
          {zoneBPos[0].map((pos, i) => (
            <S.Camel key={i} style={{ transform: `rotate(${pos.rotation}deg)` }}>
              <img src={CamelImg} />
            </S.Camel>
          ))}
        </S.CamelRow>
        <S.CamelRow>
          {zoneBPos[1].map((pos, i) => (
            <S.Camel key={i} style={{ transform: `rotate(${pos.rotation}deg)` }}>
              <img src={CamelImg} />
            </S.Camel>
          ))}
        </S.CamelRow>
        <S.CamelRow>
          {zoneBPos[2].map((pos, i) => (
            <S.Camel key={i} style={{ transform: `rotate(${pos.rotation}deg)` }}>
              <img src={CamelImg} />
            </S.Camel>
          ))}
        </S.CamelRow>
      </S.CamelZoneB>
    </>
  );
}
export default Camel;
