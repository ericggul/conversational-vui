import React, { useMemo } from "react";
import * as S from "./styles";

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandom = (min, max) => Math.random() * (max - min) + min;

const getRandomFromArray = (array) => array[Math.floor(Math.random() * array.length)];

const TEXTS = ["Breaking News", "Stay Tuned", `Don't Miss`];

function BreakingNews() {
  const letterData = useMemo(() => {
    const data = [];
    for (let i = 0; i < 700; i++) {
      data.push({
        left: getRandomInt(0, getRandom(10, 30)) * 50,
        top: getRandomInt(0, 40) * 25 + 15,
        opacity: getRandom(0.2, 0.5),
        text: getRandomFromArray(TEXTS),
      });
    }
    return data;
  }, []);

  return (
    <S.StyledBreakingNews>
      {letterData.map((el, i) => (
        <S.Letter left={el.left} top={el.top} opacity={el.opacity} key={i}>
          {el.text}
        </S.Letter>
      ))}
    </S.StyledBreakingNews>
  );
}
export default BreakingNews;
