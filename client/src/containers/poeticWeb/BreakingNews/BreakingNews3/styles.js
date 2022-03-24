import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;

  flex-direction: column;
  font-family: TimesNewRomand, "Times New Roman";
  overflow: hidden;
  position: relative;
`;

export const NewsEl = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(${({ left }) => left}px, ${({ top }) => top}px);
`;

export const NewsTitle = styled.div`
  font-size: 1.5rem;

  flex-direction: column;
`;

export const NewsAbstract = styled.div`
  font-size: 1rem;
`;

export const Rectangle = styled.div`
  position: absolute;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  left: ${({ left, width }) => left - width / 2}px;
  top: ${({ top, height }) => top - height / 2}px;
  background: ${({ background }) => background};
  transition: background 0.3s;
`;
