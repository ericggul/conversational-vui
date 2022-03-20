import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  flex-direction: column;
  font-family: TimesNewRomand, "Times New Roman";
`;

export const HydraContainer = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight / 3}px;
  ${FlexCenterStyle};
`;

export const NewsContainer = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight / 3}px;
  ${FlexCenterStyle};
`;

export const NewsTitle = styled.div``;

export const NewsAbstract = styled.div``;
