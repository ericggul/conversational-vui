import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
import * as S from "./styles";
import useResize from "@U/hooks/useResize";

const getRandom = (a, b) => Math.random() * (b - a) + a;

const BasicHeaderContainer = ({ text = "Breaking News", onClick, header }) => {
  const headerRef = useRef();
  const containerRef = useRef();
  const [elWidth, setElWidth] = useState(0);
  const [windowWidth, windowHeight] = useResize();
  const [elNumber, setElNumber] = useState(1);

  const [rotateSec, setRotateSec] = useState(3);
  const rotateSecRandomness = useMemo(() => getRandom(3, 7), []);
  const [visible, setVisible] = useState(false);

  const color = useMemo(() => (header ? `rgb(200, 30, 30)` : `rgb(255, ${getRandom(80, 100)}, ${getRandom(80, 100)})`), [header]);

  useEffect(() => {
    if (headerRef && headerRef.current) {
      setElWidth(headerRef.current.offsetWidth);
    }
  }, [headerRef, windowWidth]);

  useEffect(() => {
    if (elWidth !== 0 && windowWidth !== 0) {
      setElNumber(Math.floor((windowWidth * 6) / elWidth));
      setRotateSec((windowWidth / 400) * rotateSecRandomness);
      setVisible(true);
    }
  }, [elWidth, windowWidth]);

  return (
    <S.HeaderContainer ref={containerRef} visible={visible} visibleSec={getRandom(0.5, 3.5)} color={color} rotateSec={rotateSec} onClick={onClick}>
      {new Array(elNumber).fill(0).map((e, i) => (
        <S.MovingHeader top={(Math.random() < 0.5 ? -1 : 1) * getRandom(0, getRandom(0, 0.5))} key={i} idx={i} elNumber={elNumber} ref={headerRef}>
          {text}{" "}
        </S.MovingHeader>
      ))}
    </S.HeaderContainer>
  );
};

export { BasicHeaderContainer };
