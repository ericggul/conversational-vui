import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const Sector = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
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
