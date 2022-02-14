import styled, { css } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledSector2 = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(black, #aaa);
  color: white;
`;

export const Header = styled.div`
  ${FlexCenterStyle};
  font-size: 2rem;
  margin: 2rem;
  margin-bottom: 4rem;
  font-weight: bold;
`;

export const Displayer = styled.div`
  ${FlexCenterStyle};
  position: relative;
  width: ${({ theme }) =>
    theme.windowWidth < 768
      ? theme.windowWidth * 0.85
      : theme.windowWidth * 0.7}px;
  margin-left: ${({ theme }) =>
    theme.windowWidth < 768
      ? theme.windowWidth * 0.075
      : theme.windowWidth * 0.15}px;
  flex-direction: column;
  word-break: keep-all;
`;

export const Question = styled.div`
  min-height: 2rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  margin-left: 0;
  margin-right: 5rem;
  width: calc(100% - 5rem);
`;
export const Answer = styled.div`
  ${(props) => (props.opened ? "max-height: 3vh" : "max-height: 0")};
  ${(props) => (props.opened ? "opacity: 1" : "opacity: 0")};
  margin-bottom: 6vh;
  transition: all 0.5s;
  font-size: 1rem;
  color: #fff;
  margin-left: 0;
  width: 100%;
`;

export const ArrowButton = styled.div`
  cursor: pointer;
  ${FlexCenterStyle};
  position: absolute;
  right: 0;
  top: 1rem;
`;

export const ArrowBar = styled.div`
  width: 2rem;
  height: 0;
  margin-left: -0.7267rem;
  box-sizing: border-box;
  border: solid 0.125rem white;
  box-shadow: 0 0 0.5rem white;
  background-color: white;

  transform-origin: center;

  transform: rotate(
    ${(props) => (!props.opened ? props.angle : -props.angle)}deg
  );

  transition: transform 0.5s;
`;
