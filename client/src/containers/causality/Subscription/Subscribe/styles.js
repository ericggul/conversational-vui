import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";
export const StyledPrint = styled.div`
  position: relative;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  flex-direction: column;
  background: rgb(20, 10, 0);
  color: white;
  font-family: Courier New;
`;

export const Header = styled.div`
  ${FlexCenterStyle};
  height: 100px;
  width: 100%;
  font-size: 40px;
  font-weight: bold;
`;

export const GridArea = styled.div`
  ${FlexCenterStyle};
  overflow-x: hidden;
`;

export const Cell = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: ${({ theme }) => theme.windowWidth * 0.3}px;
  height: ${({ theme }) => theme.windowHeight * 0.3}px;
  ${FlexCenterStyle};
  position: relative;

  p {
    ${({ imageLoaded }) => (imageLoaded ? "opacity: 0" : "opacity: 1")};
    transition: all 0.5s;
    font-size: 1.5rem;
    font-family: Times New Roman;
    transform: rotate(10deg);
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  ${({ imageLoaded }) => (imageLoaded ? "opacity: 1" : "opacity: 0")};
  ${({ imageLoaded }) => (imageLoaded ? "transform: translateZ(0)" : "transform: translateZ(-10rem)")};
  transition: all 0.5s;
`;

export const Text = styled.div`
  width: 100%;
  margin-top: 15px;
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
