import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;

  flex-direction: column;
  font-family: TimesNewRomand, "Times New Roman";
  overflow: hidden;
`;

export const NewsEl = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

export const NewsTitle = styled.div`
  font-size: 1.5rem;

  flex-direction: column;
`;

export const NewsAbstract = styled.div`
  font-size: 1rem;
`;
