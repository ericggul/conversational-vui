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
const getRandomInt = (a, b) => Math.floor(getRandom(a, b));

function Main() {
  const ref = useRef(null);
  const record = useSocketInputRecord();
  const [length, setLength] = useState(0);
  const [lengthStore, setLengthStore] = useState(0);
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

  useEffect(() => {
    if (length >= 1 && length > lengthStore) {
      addBlurredRect();
    }
    if (length === 0) {
      removeBlurredRects();
    }
    setLengthStore(length);
  }, [length, lengthStore]);

  function removeBlurredRects() {
    blurredRectList.map((el) => {
      console.log(el);
      el.remove();
    });
    setBlurredRectList([]);
  }

  function addBlurredRect() {
    if (ref && ref.current) {
      let boundingRect = ref.current.getBoundingClientRect();

      for (let i = 0; i < 6; i++) {
        const rect = document.createElement("div");
        rect.classList.add("blurred-rect");

        const width = (boundingRect.width / 10) * getRandomInt(1, 3);
        const height = (boundingRect.height / 20) * getRandomInt(1, 4);

        rect.style.width = `${width}px`;
        rect.style.height = `${height}px`;

        rect.style.left = `${(boundingRect.width / 20) * getRandomInt(1, 20) + boundingRect.left}px`;
        rect.style.top = `${(boundingRect.height / 40) * getRandomInt(1, 40) + boundingRect.top}px`;
        rect.style.transform = `translate(-50%, -50%)`;

        rect.style.backdropFilter = filterGenerator();
        ref.current.appendChild(rect);
        setBlurredRectList((list) => [...list, rect]);
      }
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
