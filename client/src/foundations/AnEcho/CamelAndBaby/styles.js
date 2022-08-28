import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const CamelZone = styled.div`
  position: absolute;
  top: 550px;
  left: 470px;
  ${FlexCenterStyle};
`;

export const Camel = styled.div`
  width: 40px;
  ${FlexCenterStyle};

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const Baby = styled.div`
  ${FlexCenterStyle};
  position: absolute;
  top: 500px;
  left: 1500px;
  width: 130px;
  height: 130px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
