import React, { useMemo } from "react";
import * as S from "./styles";

function NumberRow() {
  const randomZeroOnesA = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);
  const randomZeroOnesB = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);
  const randomZeroOnesC = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);

  return (
    <S.NumberRows>
      <S.NumberRowA>{randomZeroOnesA}</S.NumberRowA>
      <S.NumberRowB>{randomZeroOnesB}</S.NumberRowB>
      <S.NumberRowC>{randomZeroOnesC}</S.NumberRowC>
      <S.NumberRowB>{randomZeroOnesB}</S.NumberRowB>
      {new Array(10).fill(0).map((_, i) => (
        <S.NumberRowA style={{ opacity: 0.1 * (10 - i) }} key={i}>
          {randomZeroOnesA}
        </S.NumberRowA>
      ))}
    </S.NumberRows>
  );
}
export default NumberRow;
