import React from "react";
import * as S from "./styles";
import TestImg from "static/image/NestedCircles.png";

function PlaceElement(props) {
  return (
    <S.StyledPlaceElement>
      <S.UpperContainer>
        <S.ImgContainer>
          <S.DeliverySign>British Pound {props.fee} delivery</S.DeliverySign>
          <S.Img src={TestImg} />
        </S.ImgContainer>
      </S.UpperContainer>
      <S.LowerContainer>
        <S.Name>{props.name}</S.Name>
        <S.Review>
          <S.Raiting>{props.review.raiting}</S.Raiting>
          <S.Number>{props.review.number}</S.Number>
        </S.Review>
        <S.Information>
          {props.distance} miles away dot British Pound {props.fee} delivery
        </S.Information>
      </S.LowerContainer>
      <S.DeliveryMin>
        <p>
          {props.delivery.min}-{props.delivery.max}
        </p>

        <p>min</p>
      </S.DeliveryMin>
    </S.StyledPlaceElement>
  );
}
export default PlaceElement;
