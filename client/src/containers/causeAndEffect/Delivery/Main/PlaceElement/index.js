import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import * as S from "./styles";
import TestImg from "static/image/NestedCircles.png";
import { IoMdStar } from "react-icons/io";

function Raiting({ raiting }) {
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
    } else return "Normal";
  }, [raiting]);

  return (
    <S.Raiting>
      <IoMdStar />
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
  return (
    <S.StyledPlaceElement>
      <S.UpperContainer>
        <S.ImgContainer>
          <S.DeliverySign>&#163; {props.fee} delivery</S.DeliverySign>
          <S.Img src={imgUrl || TestImg} />
        </S.ImgContainer>
      </S.UpperContainer>
      <S.LowerContainer>
        <S.Name>{props.name}</S.Name>
        <S.Review>
          <Raiting raiting={props.review.raiting} /> <Number number={props.review.number} />
        </S.Review>
        <S.Information>
          {props.distance} miles away &#183; &#163; {props.fee} delivery
        </S.Information>
      </S.LowerContainer>
      <S.DeliveryMin>
        <p>
          {props.delivery.min} - {props.delivery.max}
        </p>
        <p>min</p>
      </S.DeliveryMin>
    </S.StyledPlaceElement>
  );
}
export default PlaceElement;
