import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import * as S from "./styles";
import useResize from "@U/hooks/useResize";

const getRandom = (a, b) => Math.random() * (b - a) + a;

const FlipHeader = React.forwardRef((props, ref) => {
  const [splitted, setSplitted] = useState(props.text.split(""));

  useEffect(() => {
    setSplitted(props.text.split(""));
  }, [props.text]);

  return (
    <S.FlipHeaderUnit ref={ref}>
      {splitted.map((text, i) => (
        <S.FlipHeaderSpan key={i}>{text}</S.FlipHeaderSpan>
      ))}
    </S.FlipHeaderUnit>
  );
});

const BasicHeaderContainer = ({ text = "Breaking News", onClick }) => {
  const ref = useRef();
  const [elWidth, setElWidth] = useState(0);
  const [windowWidth, windowHeight] = useResize();
  const [elNumber, setElNumber] = useState(1);
  const [rotateSec, setRotateSec] = useState(3);
  const [visible, setVisible] = useState(false);

  const color = useMemo(() => `rgb(255, ${getRandom(80, 100)}, ${getRandom(80, 100)})`, []);

  useEffect(() => {
    if (ref && ref.current) {
      setElWidth(ref.current.offsetWidth);
    }
  }, [ref, windowWidth]);

  useEffect(() => {
    if (elWidth !== 0 && windowWidth !== 0) {
      setElNumber(Math.floor((windowWidth * 7) / elWidth));
      setRotateSec((windowWidth / 400) * getRandom(4, 7));
      setVisible(true);
    }
  }, [elWidth, windowWidth]);

  return (
    <S.HeaderContainer visible={visible} color={color} rotateSec={rotateSec} onClick={onClick}>
      {new Array(elNumber).fill(0).map((e, i) => (
        <S.MovingHeader top={(Math.random() < 0.5 ? -1 : 1) * getRandom(0, getRandom(0, 0.5))} key={i} idx={i} elNumber={elNumber} ref={ref}>
          {text}{" "}
        </S.MovingHeader>
      ))}
    </S.HeaderContainer>
  );
};

export { BasicHeaderContainer };
