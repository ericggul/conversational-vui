import * as S from "./styles";
import { useMemo } from "react";

//foundations
import NumberRow from "@F/AnEcho/TextLevel/NumberRow";
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
      <NumberRow />
      <S.TextRow style={{ fontSize: "18px", top: "1000px" }}>
        {strangeTextA.split("").map((s, i) => (
          <S.SingleText key={i}>{s}</S.SingleText>
        ))}
      </S.TextRow>
      <S.TextRow style={{ fontSize: "20px", top: "1100px" }}>{strangeTextA}</S.TextRow>
      <S.TextRow style={{ fontStyle: "Times New Roman", fontSize: "17px", top: "1150px", height: "400px" }}>
        {strangeTextA.split("").map((s, i) => (
          <S.SingleText key={i} style={{ transform: `translateY(${liberalHeightTranslation[i]}px)` }}>
            {s}
          </S.SingleText>
        ))}
      </S.TextRow>
      <ExceptSpouseAndChildren />
    </S.TextLevel>
  );
}
