import React, { useMemo } from "react";
import * as S from "./styles";
import useResize from "@U/hooks/useResize";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CircleLoading } from "loplat-ui";
import { CircularProgress } from "@mui/material";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Intro() {
  const TEXT_ARRAY = [
    "The World is Changing Fast.",
    "And Technology is Disrupting The Market More than Ever.",
    "Are you Prepared to Face This Unpredictable Future?",
    "We are here to Help You Get Readied.",
    "Here is a Quick Overview of How Future Will Look Like:",
  ];
  const TEXT = "The World is Changing Fast";

  const [windowWidth, windowHeight] = useResize();
  const loadingLocationsA = useMemo(() => {
    const locations = [];
    for (let i = 0; i < 10; i++) {
      locations.push({
        top: getRandom(windowHeight * 0.1, windowHeight * 0.9),
        left: getRandom(windowWidth * 0.1, windowWidth * 0.9),
        delay: getRandom(0, 2),
      });
    }
    return locations;
  }, []);
  const loadingLocationsB = useMemo(() => {
    const locations = [];
    for (let i = 0; i < 10; i++) {
      locations.push({
        top: getRandom(windowHeight * 0.1, windowHeight * 0.9),
        left: getRandom(windowWidth * 0.1, windowWidth * 0.9),
        size: getRandom(50, 150),
        delay: getRandom(0, 2),
      });
    }
    return locations;
  }, []);

  const loadingLocationsC = useMemo(() => {
    const locations = [];
    for (let i = 0; i < 10; i++) {
      locations.push({
        top: getRandom(windowHeight * 0.1, windowHeight * 0.9),
        left: getRandom(windowWidth * 0.1, windowWidth * 0.9),
        size: getRandom(50, 150),
        delay: getRandom(0, 2),
      });
    }
    return locations;
  }, []);

  return (
    <S.StyledIntro>
      {TEXT_ARRAY.map((text, j) => (
        <S.TextSection key={j}>
          {text.split(" ").map((txt, i) => (
            <S.Text key={i} delay={1.8 * j + (i + 1) * 0.07} style={{ color: `${(i + j) % 2 === 0 ? "white" : "black"}` }}>
              {txt}
            </S.Text>
          ))}
        </S.TextSection>
      ))}
      {loadingLocationsA.map((data, i) => (
        <S.Loading key={i} style={{ left: `${data.left}px`, top: `${data.top}px`, animationDelay: `${9 + data.delay}s` }}>
          <AiOutlineLoading3Quarters />
          <S.LoadingText>Loading</S.LoadingText>
        </S.Loading>
      ))}
      {loadingLocationsB.map((data, i) => (
        <S.CircleLoading key={i} style={{ left: `${data.left}px`, top: `${data.top}px`, animationDelay: `${10 + data.delay}s` }}>
          <CircleLoading size={data.size} />
        </S.CircleLoading>
      ))}
      {loadingLocationsC.map((data, i) => (
        <S.CircularProgress key={i} style={{ left: `${data.left}px`, top: `${data.top}px`, animationDelay: `${9.5 + data.delay}s` }}>
          <CircularProgress size={data.size} />
        </S.CircularProgress>
      ))}
    </S.StyledIntro>
  );
}
export default Intro;
