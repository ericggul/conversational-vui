import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const CamelZone = styled.div`
  position: absolute;
  top: 540px;
  left: 435px;
  ${FlexCenterStyle};
  flex-direction: column;

  transform: translate(-50%, -50%);
`;

export const CamelRow = styled.div`
  ${FlexCenterStyle};
`;

export const CamelZoneB = styled.div`
  position: absolute;
  top: 540px;
  left: 1000px;
  ${FlexCenterStyle};
  flex-direction: column;

  transform: translate(-50%, -50%);
`;

export const Camel = styled.div`
  width: 40px;
  ${FlexCenterStyle};

  img {
    width: 100%;
    object-fit: contain;
  }
`;
