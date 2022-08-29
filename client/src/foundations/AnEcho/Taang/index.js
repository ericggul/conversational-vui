import React, { useMemo } from "react";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;
export default function Taang() {
  const letterData = useMemo(() => {
    const data = [];
    for (let i = 0; i < 200; i++) {
      data.push({
        left: getRandom(getRandom(0, 300), 1000),
        top: getRandom(0, 700),
        size: getRandom(10, 50),
        rotation: getRandom(0, 360),
      });
    }
    return data;
  }, []);

  return (
    <S.Container>
      {letterData.map((el, i) => (
        <S.Letter left={el.left} top={el.top} size={el.size} rotation={el.rotation} key={i}>
          !
        </S.Letter>
      ))}
    </S.Container>
  );
}
