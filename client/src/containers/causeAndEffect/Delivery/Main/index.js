import React from "react";
import PlaceElement from "./PlaceElement";
import * as S from "./styles";
import useSocketInput from "@U/hooks/causeAndEffect/useSocketInput";

const DUMMY_DATA = [
  {
    name: "Pasta Evangelists",
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
    name: "Pasta Evangelists",
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
    name: "Pasta Evangelists",
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
    name: "Pasta Evangelists",
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
    name: "Pasta Evangelists",
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
  const triggered = useSocketInput(400);

  return (
    <S.StyledMain>
      {DUMMY_DATA.map((d, i) => (
        <PlaceElement key={i} {...d} triggered={triggered} />
      ))}
    </S.StyledMain>
  );
}
export default Main;
