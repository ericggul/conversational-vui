import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledSun = styled.div`
  position: absolute;
  top: 1035px;
  left: 1250px;

  background: white;
  border-radius: 50%;
  width: 70px;
  height: 70px;

  box-shadow: 0 0 0.5rem white, 0 0 1rem white, 0 0 1.5rem white, 0 0 2.5rem white, 0 0 3.5rem white, 0 0 4rem white, 0 0 5rem white, 0 0 7rem white, 0 0 10rem white;
`;

export const Dot = styled.div`
  position: absolute;
  top: 25px;
  left: 47px;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: black;
`;

export const MiniSun = styled.div`
  position: absolute;
  top: 220px;
  left: 1720px;

  background: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  box-shadow: 0 0 0.5rem white, 0 0 1rem white, 0 0 1.5rem white, 0 0 2.5rem white, 0 0 3.5rem white, 0 0 4rem white, 0 0 5rem white, 0 0 7rem white;
`;
