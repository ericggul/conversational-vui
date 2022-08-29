import React from "react";
import * as S from "./styles";

function WhiteGrid() {
  return (
    <>
      {new Array(6).fill(0).map((_, i) => (
        <S.WhiteGrid left={625 + i * 75} key={-i}>
          {new Array(25).fill(0).map((_, j) => (
            <S.SingleWhite key={i * 25 + j} width={i * 2.5 + 3} />
          ))}
        </S.WhiteGrid>
      ))}
      {new Array(5).fill(0).map((_, i) => (
        <S.WhiteGrid left={1075 + i * 75} key={-i}>
          {new Array(25).fill(0).map((_, j) => (
            <S.SingleWhite key={i * 25 + j} width={13 - 2.5 * i} angle={20 * i + 20 + j * 17} />
          ))}
        </S.WhiteGrid>
      ))}
    </>
  );
}
export default WhiteGrid;
