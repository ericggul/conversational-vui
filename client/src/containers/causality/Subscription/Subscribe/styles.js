import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";
export const StyledPrint = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  flex-direction: column;
  background: black;
  color: white;
  font-family: Courier New;
`;

export const Header = styled.div`
  ${FlexCenterStyle};
  height: 100px;
  width: 100%;
  font-size: 30px;
`;

export const GridArea = styled.div`
  ${FlexCenterStyle};
`;

export const Cell = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  position: relative;
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.windowWidth / 3}px;
  height: ${({ theme }) => theme.winowHeight / 3}px;
  object-fit: contain;
`;

export const Text = styled.div`
  width: 100%;
  height: 40px;
  ${FlexCenterStyle};

  color: white;
  font-size: 15px;
`;

export const Span = styled.span`
  margin: 0;
  padding: 0;
  ${({ bold }) => bold && "font-weight: bold"};
`;

export const Button = styled.div``;
