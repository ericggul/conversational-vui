import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledPlaceElement = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: calc(100% - 1.5rem);
  margin: 0.75rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
`;

export const UpperContainer = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  position: relative;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 15rem;
`;

export const DeliverySign = styled.div`
  position: absolute;
  background: red;
  color: white;
  padding: 0.5rem;
  top: 0;
  left: 0;
  margin: 0.75rem;
  font-size: 0.75rem;
  font-size: bold;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const LowerContainer = styled.div``;

export const Name = styled.div``;
export const Review = styled.div``;

export const Raiting = styled.span``;
export const Number = styled.span``;

export const Information = styled.div``;

export const DeliveryMin = styled.div``;

// <S.StyledPlaceElement>
// <S.UpperContainer>
//   <S.ImgContainer>
//     <S.DeliverySign>British Pound {props.fee} delivery</S.DeliverySign>
//     <S.Img src={TestImg} />
//   </S.ImgContainer>

// </S.UpperContainer>
// <S.LowerContainer>
//   <S.Name>{props.name}</S.Name>
//   <S.Review>
//     <S.Raiting>{props.review.raiting}</S.Raiting>
//     <S.Number>{props.review.number}</S.Number>
//   </S.Review>
//   <S.Information>
//     {props.distance} miles away dot British Pound {props.fee} delivery
//   </S.Information>
// </S.LowerContainer>
// <S.DeliveryMin>
//   <p>
//     {props.delivery.min}-{props.delivery.max}
//   </p>

//   <p>min</p>
// </S.DeliveryMin>
// </S.StyledPlaceElement>
