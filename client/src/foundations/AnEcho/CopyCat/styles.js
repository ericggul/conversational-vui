import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledCopyCat = styled.div`
  position: absolute;
  top: 715px;
  left: 435px;

  transform: translate(-50%, -50%);
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const CatImage = styled.div`
  width: 150px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Text = styled.div`
  font-size: 22px;
  font-family: Cinzel;
  font-weight: 600;
  width: 300px;
  text-align: center;
`;
