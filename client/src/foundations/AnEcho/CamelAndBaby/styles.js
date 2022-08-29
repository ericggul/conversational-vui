import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const CamelZone = styled.div`
  position: absolute;
  top: 540px;
  left: 490px;
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

export const BabyZone = styled.div`
  position: absolute;
  top: 540px;
  left: 1565px;
  ${FlexCenterStyle};

  transform: translate(-50%, -50%);
`;

export const Baby = styled.div`
  ${FlexCenterStyle};
  width: 130px;
  height: 130px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const SurroundingFace = styled.div`
  position: absolute;

  img {
    width: 100px;
    height: auto;
    -webkit-filter: grayscale(100%) brightness(350%) blur(1px);
    filter: grayscale(100%) brightness(350%) blur(1px);
  }
`;
