import React, { useMemo } from "react";
import { IoMdStar } from "react-icons/io";
import { SiStarbucks } from "react-icons/si";
import * as S from "./styles";

function RelativeEl({ triggered, length, ment, raiting }) {
  return (
    <S.RaitingRelative triggered={triggered} length={length}>
      {triggered ? <SiStarbucks style={{ marginRight: triggered && "0.2rem" }} /> : <IoMdStar />}
      {triggered ? 5.1 : raiting.toFixed(1)} {ment}
    </S.RaitingRelative>
  );
}

function AbsoluteEl({ triggered, length, ment, raiting }) {
  return (
    <S.RaitingAbsolute triggered={triggered} length={length}>
      {triggered ? <SiStarbucks style={{ marginRight: triggered && "0.2rem" }} /> : <IoMdStar />}
      {triggered ? 5.1 : raiting.toFixed(1)} {ment}
    </S.RaitingAbsolute>
  );
}

function Raiting({ raiting, triggered, length }) {
  const ment = useMemo(() => {
    if (raiting < 2) {
      return "Poor";
    }
    if (raiting < 3) {
      return "Normal";
    }
    if (raiting < 4) {
      return "Good";
    }
    if (raiting < 4.5) {
      return "Very Good";
    }
    if (raiting < 5) {
      return "Perfect";
    } else return "Schumpeterstrasse";
  }, [raiting]);

  return (
    <S.Cover>
      <RelativeEl triggered={triggered} length={length} ment={ment} raiting={raiting} />
      {new Array(length).fill(0).map((_, i) => (
        <AbsoluteEl triggered={triggered} length={length} ment={ment} raiting={raiting} key={i} />
      ))}
    </S.Cover>
  );
}
export default Raiting;
