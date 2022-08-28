import * as S from "./styles";
import { useMemo } from "react";

export default function TextLevel({ triggerAnimate, word }) {
  const randomZeroOnesA = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);
  const randomZeroOnesB = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);
  const randomZeroOnesC = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);

  return (
    <S.TextLevel>
      <S.NumberRows triggerAnimate={triggerAnimate}>
        <S.NumberRowA>{randomZeroOnesA}</S.NumberRowA>
        <S.NumberRowB>{randomZeroOnesB}</S.NumberRowB>
        <S.NumberRowC>{randomZeroOnesC}</S.NumberRowC>
        <S.NumberRowB>{randomZeroOnesB}</S.NumberRowB>
        <S.NumberRowA>{randomZeroOnesA}</S.NumberRowA>
      </S.NumberRows>

      {/* <S.TextRow triggerAnimate={triggerAnimate}></S.TextRow> */}
    </S.TextLevel>
  );
}
