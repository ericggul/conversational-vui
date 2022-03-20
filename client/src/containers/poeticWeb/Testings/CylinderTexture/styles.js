import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Original = styled.div`
  height: 100vh;
  width: 100vw;
  ${FlexCenterStyle};
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const CanvasContainer = styled.div`
  height: 100vh;
  width: 100vw;
  ${FlexCenterStyle};
  flex-direction: column;
  margin: 1rem;
`;

export const Header = styled.div`
  font-size: 3rem;
  font-weight: bold;
  width: 80%;
  margin: 1rem;
`;

export const Body = styled.div`
  font-size: 1rem;
  width: 80%;
  margin: 1rem;
`;
