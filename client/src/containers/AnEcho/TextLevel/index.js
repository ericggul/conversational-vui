import * as S from "./styles";
import { useMemo } from "react";

//foundations
import NumberRow from "@F/AnEcho/TextLevel/NumberRow";

import { switchWord, replaceCharacter, sillyReplace, sillyMoveCharCode, totallyRandom } from "./utils";

const getRandom = (a, b) => Math.random() * (b - a) + a;

export default function TextLevel({ triggerAnimate, word }) {
  const randomZeroOnesA = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);
  const randomZeroOnesB = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);
  const randomZeroOnesC = useMemo(() => Array.from({ length: 1000 }, () => (Math.random() < 0.5 ? 0 : 1)), []);

  const strangeTextA = useMemo(() => {
    let string = "";
    for (let i = 0; i < 20; i++) {
      string += replaceCharacter(word, i * 2, 0.1 + i * 0.03);
    }
    return string;
  }, []);

  const strangeTextB = useMemo(
    () =>
      strangeTextA
        .split("")
        .map((s, i) => {
          if (i < 100) return s;

          let r = Math.random();
          if (r < i * 0.001) {
            return "!";
          } else if (r < i * 0.002) {
            return "@";
          } else if (r < i * 0.003) {
            return "#";
          } else return s;
        })
        .join(""),
    [strangeTextA]
  );

  const liberalHeightTranslationA = useMemo(() => strangeTextA.split("").map((_, i) => getRandom(0, (i * 0.04) ** 2.8 * 0.5)), [strangeTextA]);
  const liberalHeightTranslationB = useMemo(
    () =>
      strangeTextB.split("").map((_, i) => ({
        pos: getRandom((i * 0.04) ** 2.8 * 0.2, (i * 0.04) ** 2.8),
        scale: getRandom(1, getRandom(1, 10)),
      })),
    [strangeTextA]
  );
  return (
    <S.TextLevel triggerAnimate={triggerAnimate}>
      <NumberRow />
      <S.TextRow style={{ fontStyle: "Times New Roman", fontSize: "17px", top: "286px", height: "800px" }}>
        {strangeTextB.split("").map((s, i) => (
          <S.SingleText key={i} style={{ transform: `translateY(${780 - liberalHeightTranslationB[i].pos}px)` }}>
            {s === "!" ? <S.Square /> : s === "@" ? <S.Circle /> : s === "#" ? <S.Diamond /> : s}
          </S.SingleText>
        ))}
      </S.TextRow>
      <S.TextRow style={{ fontStyle: "Times New Roman", fontSize: "17px", top: "703px", height: "400px" }}>
        {strangeTextA.split("").map((s, i) => (
          <S.SingleText key={i} style={{ bottom: "0", transform: `translateY(${380 - liberalHeightTranslationA[i]}px)` }}>
            {s}
          </S.SingleText>
        ))}
      </S.TextRow>
      <S.TextRow style={{ fontSize: "17px", top: "1100px" }}>{strangeTextA}</S.TextRow>
      <S.TextRow style={{ fontStyle: "Times New Roman", fontSize: "17px", top: "1117px", height: "400px" }}>
        {strangeTextA.split("").map((s, i) => (
          <S.SingleText key={i} style={{ transform: `translateY(${liberalHeightTranslationA[i]}px)` }}>
            {s}
          </S.SingleText>
        ))}
      </S.TextRow>
      <S.TextRow style={{ fontStyle: "Times New Roman", fontSize: "17px", top: "1134px", height: "800px" }}>
        {strangeTextB.split("").map((s, i) => (
          <S.SingleText key={i} style={{ transform: `translateY(${liberalHeightTranslationB[i].pos}px)` }}>
            {s === "!" ? <S.Square /> : s === "@" ? <S.Circle /> : s === "#" ? <S.Diamond /> : s}
          </S.SingleText>
        ))}
      </S.TextRow>
      {/* <S.TextRow style={{ fontStyle: "Times New Roman", fontSize: "17px", top: "1151px", height: "800px" }}>
        {strangeTextB.split("").map((s, i) => (
          <S.SingleText key={i} style={{ transform: `translateY(${liberalHeightTranslationB[i].pos}px)` }}>
            {s === "!" ? <S.Square /> : s === "@" ? <S.Circle /> : s === "#" ? <S.Diamond /> : s}
          </S.SingleText>
        ))}
      </S.TextRow> */}
    </S.TextLevel>
  );
}
