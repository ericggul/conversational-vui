import * as S from "./styles";
import { useMemo } from "react";

//foundations
import ExceptSpouseAndChildren from "@F/AnEcho/TextLevel/ExceptSpouseAndChildren";

import { switchWord, replaceCharacter, sillyReplace, sillyMoveCharCode, totallyRandom } from "./utils";

const getRandom = (a, b) => Math.random() * (b - a) + a;

export default function TextLevel({ triggerAnimate, word }) {
  const randomZeroOnesA = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);
  const randomZeroOnesB = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);
  const randomZeroOnesC = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);

  const strangeTextA = useMemo(() => {
    let string = "";
    for (let i = 0; i < 20; i++) {
      string += replaceCharacter(word, i * 2, 0.1 + i * 0.03) + " ";
    }
    return string;
  }, []);

  const strangeTextB = useMemo(() => {}, []);

  const liberalHeightTranslation = useMemo(() => strangeTextA.split("").map((_, i) => getRandom(0, (i * 0.04) ** 2.8 * 0.5)), [strangeTextA]);

  return (
    <S.TextLevel triggerAnimate={triggerAnimate}>
      <S.NumberRows>
        <S.NumberRowA>{randomZeroOnesA}</S.NumberRowA>
        <S.NumberRowB>{randomZeroOnesB}</S.NumberRowB>
        <S.NumberRowC>{randomZeroOnesC}</S.NumberRowC>
        <S.NumberRowB>{randomZeroOnesB}</S.NumberRowB>
        <S.NumberRowA>{randomZeroOnesA}</S.NumberRowA>
      </S.NumberRows>

      <S.TextRow>{strangeTextA}</S.TextRow>
      <S.LiberalTextRow>
        {strangeTextA.split("").map((s, i) => (
          <S.SingleText key={i} height={liberalHeightTranslation[i]}>
            {s}
          </S.SingleText>
        ))}
      </S.LiberalTextRow>
      <ExceptSpouseAndChildren />
    </S.TextLevel>
  );
}
