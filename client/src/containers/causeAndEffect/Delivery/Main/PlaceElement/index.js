import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import * as S from "./styles";
import TestImg from "static/image/NestedCircles.png";
import ImageElement from "../ImageElement";
import Raiting from "./Raiting";

//utils
import { distortLetter } from "./utils";

const DISTANCE_UNITS = ["millimeters", "centimeters", "meters", "inches", "feet", "yards", "miles"];
const TIME_UNITS = ["min", "hours", "seconds", "months", "days", "years"];

const getRandom = (a, b) => Math.random() * (b - a) + a;
const getRandomDigit = (a, b, digit) => Math.round(getRandom(a, b) * Math.pow(10, -digit)) * Math.pow(10, digit);
const getRandomArray = (array) => array[Math.floor(getRandom(0, array.length))];

function Number({ number, length }) {
  const formatNumber = (n) => {
    if (n > 500) {
      return `(500+)`;
    } else {
      return `(${n})`;
    }
  };

  return <S.Number length={length}>{formatNumber(number)}</S.Number>;
}

function PlaceElement(props) {
  const [imgUrl, setImgUrl] = useState(null);
  const fetchFood = async () => {
    try {
      let res = await axios.get("https://foodish-api.herokuapp.com/api/");
      setImgUrl(res.data.image);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchFood();
  }, []);

  //trigger party!!
  const initialRaiting = useMemo(() => Math.floor(getRandom(getRandom(0, getRandom(30, 45)), 50)) / 10, []);

  const [name, setName] = useState(props.name);
  const [raiting, setRaiting] = useState(initialRaiting);
  const [distance, setDistance] = useState(props.distance);
  const [distanceUnit, setDistanceUnit] = useState("miles");
  const [deliveryFee, setDeliveryFee] = useState(props.fee);
  const [deliveryFeePos, setDeliveryFeePos] = useState({ top: 0, left: 0 });
  const [deliveryMin, setDeliveryMin] = useState({ min: Math.round(distance * 4) * 5, max: Math.round(distance * 6) * 5 });
  const [deliveryMinUnit, setDeliveryMinUnit] = useState("min");

  const [textLength, setTextLength] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(() => {
    let l = props.record && props.record.text ? props.record.text.length : 0;
    if (props.triggered) {
      setRaiting(initialRaiting + l * 0.05 + l ** 2 * 0.05 + l ** 3 * 0.05);
      setDistance(getRandom(-100, 100).toFixed(2));
      setDistanceUnit(getRandomArray(DISTANCE_UNITS));
      setDeliveryFee((props.fee + getRandom(-10, -100)).toFixed(1));
      setDeliveryFeePos({ top: getRandom(0, 100).toFixed(2), left: getRandom(0, 100).toFixed(2) });
      setDeliveryMinUnit(getRandomArray(TIME_UNITS));
    } else {
      setName(props.name);
      setDistance(props.distance);
      setDistanceUnit("miles");
      setDeliveryFee(props.fee);
      setDeliveryFeePos({ top: 0, left: 0 });
      setDeliveryMinUnit("min");
    }
  }, [props.triggered, props.record, props.fee]);

  useEffect(() => {
    let l = props.record && props.record.text ? props.record.text.length : 0;
    setTextLength(l);
    setName(props.record ? props.record.text : "undefined");
    setColor(`hsl(${getRandom(0, 350)}, 93%, 65%)`);
  }, [props.record]);

  useEffect(() => {
    setDeliveryMin({ min: Math.round(distance * 4) * 5, max: Math.round(distance * 6) * 5 });
  }, [distance]);

  return (
    <S.StyledPlaceElement length={textLength}>
      <S.UpperContainer>
        <S.ImgContainer>
          <S.DeliverySign length={textLength} deliveryFeePos={deliveryFeePos}>
            &#163; {deliveryFee} delivery
          </S.DeliverySign>
          <ImageElement imgUrl={imgUrl || TestImg} record={props.record} />
        </S.ImgContainer>
      </S.UpperContainer>
      <S.LowerContainer>
        <S.Name color={color}>
          <S.Ordinary triggered={props.triggered}>{props.name}</S.Ordinary>
          <S.Triggered triggered={props.triggered} style={{ textTransform: "uppercase" }}>
            {name}
          </S.Triggered>
        </S.Name>
        <S.Review>
          <Raiting raiting={raiting} triggered={props.triggered} length={textLength} /> <Number length={textLength} number={props.review.number} />
        </S.Review>
        <S.Information color={color} length={textLength}>
          <S.Ordinary triggered={props.triggered}>
            {props.distance} {distanceUnit} away &#183; &#163; {props.fee} delivery
          </S.Ordinary>
          <S.Triggered triggered={props.triggered}>
            {distance} {distanceUnit} away &#183; &#163; {deliveryFee} delivery
          </S.Triggered>
        </S.Information>
      </S.LowerContainer>
      <S.DeliveryMin length={textLength}>
        <p>
          {deliveryMin.min} - {deliveryMin.max}
        </p>
        <p>{deliveryMinUnit}</p>
      </S.DeliveryMin>
    </S.StyledPlaceElement>
  );
}
export default PlaceElement;
