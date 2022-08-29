import React from "react";
import * as S from "./styles";

function Time() {
  const TIME_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 16, 32, 64, 138, 289, 98604];
  return (
    <S.StyledTime>
      {TIME_ARRAY.map((t, i) => (
        <S.SingleTime key={i} style={{ left: `${((i + 1) * 2000) / 15}px` }}>
          {t}
        </S.SingleTime>
      ))}
    </S.StyledTime>
  );
}
export default Time;
