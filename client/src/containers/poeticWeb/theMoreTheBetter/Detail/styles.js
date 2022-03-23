import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  flex-direction: column;
  font-family: TimesNewRomand, "Times New Roman";
  background: black;
`;

export const ElementContainer = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight / 3}px;
  ${FlexCenterStyle};
  background: black;
`;
export const MonoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
`;

export const MonoElement = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
  filter: blur(0.5rem);
  transition: background 0.3s;
`;

export const NewsContainer = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight / 3}px;
  ${FlexCenterStyle};
  background: black;
  color: white;
`;

export const NewsTitle = styled.div``;

export const NewsAbstract = styled.div`
  font-size: 1.5rem;
  width: 80%;
  ${FlexCenterStyle};
`;
