import React, { useState, useEffect } from "react";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function SingleWord({ original, delay }) {
  const [word, setWord] = useState(original);

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateCharacter(original, "Malkovich");
    }, 7500);
    return () => clearTimeout(timeout);
  }, []);

  function updateCharacter(a, b) {
    console.log(a, b);
    if (a.length < b.length) {
      for (let i = 0; i < b.length; i++) {
        if (i < a.length) {
          const timeout = setTimeout(() => {
            setWord((text) => text.substring(0, i) + b[i] + text.substring(i + 1));
          }, getRandom(0, 3500));
        } else {
          const timeout = setTimeout(() => {
            setWord((text) => text + b[i]);
          }, i * 500);
        }
      }
    } else if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          const timeout = setTimeout(() => {
            setWord((text) => text.substring(0, i) + b[i] + text.substring(i + 1));
          }, getRandom(0, 3500));
        }
      }
    }
  }
  return <S.Text delay={delay}>{word}</S.Text>;
}
function Malkovich() {
  return (
    <S.StyledMalkovich>
      <SingleWord original="Like" delay={0} />
      <SingleWord original="Comment" delay={1} />
      <SingleWord original="Subscribe" delay={2} />
    </S.StyledMalkovich>
  );
}
export default Malkovich;
