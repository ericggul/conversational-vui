import { useEffect, useState } from "react";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;
const getRandomColor = () => `rgb(${getRandom(220, 256)},${getRandom(50, 100)}, ${getRandom(50, 100)})`;

const MonoComp = () => {
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    const interval = window.setInterval(() => setColor(getRandomColor()), 1000);
    return () => window.clearInterval(interval);
  }, []);
  return (
    <S.ElementContainer>
      <S.MonoContainer>
        {new Array(9).fill(0).map((e, i) => (
          <S.MonoElement background={getRandomColor()} />
        ))}
      </S.MonoContainer>
    </S.ElementContainer>
  );
};

export default MonoComp;
