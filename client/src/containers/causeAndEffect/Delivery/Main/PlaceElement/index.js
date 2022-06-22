import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import * as S from "./styles";
import TestImg from "static/image/NestedCircles.png";
import { IoMdStar } from "react-icons/io";
import { SiStarbucks } from "react-icons/si";

const DISTANCE_UNITS = ["millimeters", "centimeters", "meters", "inches", "feet", "yards", "miles"];
const TIME_UNITS = ["min", "hours", "seconds", "months", "days", "years"];

const getRandom = (a, b) => Math.random() * (b - a) + a;
const getRandomDigit = (a, b, digit) => Math.round(getRandom(a, b) * Math.pow(10, -digit)) * Math.pow(10, digit);
const getRandomArray = (array) => array[Math.floor(getRandom(0, array.length))];

function Raiting({ raiting, triggered }) {
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
    <S.Raiting>
      {triggered ? <SiStarbucks /> : <IoMdStar />}
      {raiting} {ment}
    </S.Raiting>
  );
}

function Number({ number }) {
  const formatNumber = (n) => {
    if (n > 500) {
      return `(500+)`;
    } else {
      return `(${n})`;
    }
  };

  return <S.Number>{formatNumber(number)}</S.Number>;
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
  const initialRaiting = useMemo(() => getRandom(getRandom(0, getRandom(3, 4.5)), 5).toFixed(1), []);

  const [raiting, setRaiting] = useState(initialRaiting);
  const [distance, setDistance] = useState(props.distance);
  const [distanceUnit, setDistanceUnit] = useState("miles");
  const [deliveryFee, setDeliveryFee] = useState(props.fee);
  const [deliveryFeePos, setDeliveryFeePos] = useState({ top: 0, left: 0 });
  const [deliveryMin, setDeliveryMin] = useState({ min: Math.round(distance * 4) * 5, max: Math.round(distance * 6) * 5 });
  const [deliveryMinUnit, setDeliveryMinUnit] = useState("min");

  useEffect(() => {
    if (props.triggered) {
      setRaiting(getRandom(-1000000, 100000));
      setDistance(getRandom(-100, 100));
      setDistanceUnit(getRandomArray(DISTANCE_UNITS));
      setDeliveryFee(props.fee + getRandom(-10000, -100000));
      setDeliveryFeePos({ top: getRandom(0, 100), left: getRandom(0, 100) });
      setDeliveryMinUnit(getRandomArray(TIME_UNITS));
    } else {
      setRaiting(initialRaiting);
      setDistance(props.distance);
      setDistanceUnit("miles");
      setDeliveryFee(props.fee);
      setDeliveryFeePos({ top: 0, left: 0 });
      setDeliveryMinUnit("min");
    }
  }, [props.triggered, props.fee]);

  useEffect(() => {
    setDeliveryMin({ min: Math.round(distance * 4) * 5, max: Math.round(distance * 6) * 5 });
  }, [distance]);

  return (
    <S.StyledPlaceElement>
      <S.UpperContainer>
        <S.ImgContainer>
          <S.DeliverySign deliveryFeePos={deliveryFeePos}>&#163; {deliveryFee} delivery</S.DeliverySign>
          <S.Img src={imgUrl || TestImg} invertImg={props.triggered} />
        </S.ImgContainer>
      </S.UpperContainer>
      <S.LowerContainer>
        <S.Name>{props.name}</S.Name>
        <S.Review>
          <Raiting raiting={raiting} triggered={props.triggered} /> <Number number={props.review.number} />
        </S.Review>
        <S.Information>
          {distance} {distanceUnit} away &#183; &#163; {deliveryFee} delivery
        </S.Information>
      </S.LowerContainer>
      <S.DeliveryMin>
        <p>
          {deliveryMin.min} - {deliveryMin.max}
        </p>
        <p>{deliveryMinUnit}</p>
      </S.DeliveryMin>
    </S.StyledPlaceElement>
  );
}
export default PlaceElement;
