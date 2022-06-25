import React, { useState, useEffect, useRef } from "react";
import PlaceElement from "./PlaceElement";

//hooks
import useSocketInputRecord from "@U/hooks/causeAndEffect/useSocketInputRecord";
import useResize from "@U/hooks/useResize";

//data & utils
import { DUMMY_DATA } from "./utils/data";
import { filterGenerator } from "./utils/filterGenerator";

import * as S from "./styles";
import "./styles.css";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Main() {
  const ref = useRef(null);
  const record = useSocketInputRecord();
  const [length, setLength] = useState(0);
  const [triggered, setTriggered] = useState(false);

  const [windowWidth, windowHeight] = useResize();

  useEffect(() => {
    if (record) {
      setLength(record.text.length);
      setTriggered(true);
      const timeout = setTimeout(() => {
        setTriggered(false);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [record]);

  const [blurredRectList, setBlurredRectList] = useState([]);

  const RECT_NUMBER_PER_LENGTH = 1;

  useEffect(() => {
    if (length >= 1) {
      addBlurredRect();
    }
    removeBlurredRects();
  }, [length]);

  console.log(blurredRectList.length, length);

  function removeBlurredRects() {
    if (blurredRectList.length > length * RECT_NUMBER_PER_LENGTH) {
      blurredRectList.slice(length * RECT_NUMBER_PER_LENGTH).forEach((el) => el.remove());
      setBlurredRectList(blurredRectList.slice(0, length * RECT_NUMBER_PER_LENGTH));
    }
  }

  function addBlurredRect() {
    if (ref && ref.current) {
      const rect = document.createElement("div");
      rect.classList.add("blurred-rect");
      rect.style.width = `${getRandom(3, 5)}rem`;
      rect.style.height = `${getRandom(3, 5)}rem`;
      rect.style.top = getRandom(0, windowHeight) + "px";
      rect.style.left = getRandom(0, windowWidth) + "px";
      rect.style.transform = `translate(-50%, -50%)`;

      rect.style.backdropFilter = filterGenerator();
      ref.current.appendChild(rect);
      setBlurredRectList([...blurredRectList, rect]);
    }
  }

  return (
    <S.StyledMain length={length} triggered={triggered} ref={ref}>
      {DUMMY_DATA.map((d, i) => (
        <PlaceElement key={i} {...d} record={record} triggered={triggered} />
      ))}
    </S.StyledMain>
  );
}
export default Main;
