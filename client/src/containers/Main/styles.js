import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledMain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  flex-direction: column;
  pointer-events: none;
`;

export const Paragraph = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: ${({ theme }) =>
    theme.windowWidth < 768 ? theme.windowWidth * 0.7 : 500}px;
`;

export const RevealParagraph = styled.div`
  ${FlexCenterStyle};
  color: white;
  flex-direction: column;
  width: ${({ theme }) =>
    theme.windowWidth < 768 ? theme.windowWidth * 0.7 : 500}px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

export const Descrp = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  pointer-events: auto;
`;
