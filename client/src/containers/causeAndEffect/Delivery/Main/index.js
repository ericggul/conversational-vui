import React, { useState } from "react";
import PlaceElement from "./PlaceElement";
import * as S from "./styles";
import useSocketInputRecord from "@U/hooks/causeAndEffect/useSocketInputRecord";
import { useEffect } from "react";

const DUMMY_DATA = [
  {
    name: "Pasta John's",
    review: {
      raiting: 4.4,
      number: 576,
    },
    delivery: {
      min: 10,
      max: 20,
    },
    distance: 0.6,
    fee: 2.49,
  },
  {
    name: "Pasta John's",
    review: {
      raiting: 4.4,
      number: 576,
    },
    delivery: {
      min: 10,
      max: 20,
    },
    distance: 0.6,
    fee: 2.49,
  },
  {
    name: "Pasta John's",
    review: {
      raiting: 4.4,
      number: 576,
    },
    delivery: {
      min: 10,
      max: 20,
    },
    distance: 0.6,
    fee: 2.49,
  },
  {
    name: "Pasta John's",
    review: {
      raiting: 4.4,
      number: 576,
    },
    delivery: {
      min: 10,
      max: 20,
    },
    distance: 0.6,
    fee: 2.49,
  },
  {
    name: "Pasta John's",
    review: {
      raiting: 4.4,
      number: 576,
    },
    delivery: {
      min: 10,
      max: 20,
    },
    distance: 0.6,
    fee: 2.49,
  },
];

function Main() {
  const record = useSocketInputRecord();
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    if (record) {
      setTriggered(true);
      const timeout = setTimeout(() => {
        setTriggered(false);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [record]);

  return (
    <S.StyledMain>
      {DUMMY_DATA.map((d, i) => (
        <PlaceElement key={i} {...d} record={record} triggered={triggered} />
      ))}
    </S.StyledMain>
  );
}
export default Main;
