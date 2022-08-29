import React from "react";
import * as S from "./styles";

function WhiteGrid() {
  return (
    <>
      {new Array(14).fill(0).map((_, i) => (
        <S.WhiteGrid left={25 + i * 75} key={-i}>
          {new Array(25).fill(0).map((_, j) => (
            <S.SingleWhite key={i * 25 + j} width={i + 2} />
          ))}
        </S.WhiteGrid>
      ))}
      {new Array(13).fill(0).map((_, i) => (
        <S.WhiteGrid left={1075 + i * 75} key={-i}>
          {new Array(25).fill(0).map((_, j) => (
            <S.SingleWhite key={i * 25 + j} width={14 - i} angle={20 * i + 20 + j * 17} />
          ))}
        </S.WhiteGrid>
      ))}
    </>
  );
}
export default WhiteGrid;
