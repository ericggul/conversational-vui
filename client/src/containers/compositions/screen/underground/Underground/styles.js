import styled, { css } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  background: ${({ highState, color }) => (highState ? color : "red")};
  position: relative;
`;

export const Text = styled.div``;

export const Inner = styled.div`
  width: ${({ theme }) => theme.windowWidth * 0.7}px;
  height: ${({ theme }) => theme.windowHeight * 0.7}px;
  background: white;
  position: relative;
  ${FlexCenterStyle};
  //   border: 1vw solid black;
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: ${({ theme, highState }) => theme.windowWidth * (highState ? 0.35 : 0.3)}px;
  height: ${({ theme, highState }) => theme.windowWidth * (highState ? 0.35 : 0.3)}px;
  background: ${({ highState, color }) => (highState ? color : "red")};

  transition: width 0.05s, height 0.05s, transform 0.5s;

  ${FlexCenterStyle};
  color: white;
  font-size: 3rem;

  transform: rotate(${({ rotate }) => rotate >= 0 && rotate * 30}deg);
`;

export const Input = styled.input.attrs({ spellCheck: "false" })`
  border: none;
  outline: none;
  text-align: center;
  width: 100%;
  font-size: 2rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const ButtonCommon = css`
  position: absolute;
  border: 10px solid white;
  cursor: pointer;
  ${FlexCenterStyle};
  color: white;
  font-size: ${({ theme }) => theme.windowWidth * 0.04}px;
  font-weight: bold;
  transition: all 0.5s;
`;

export const ButtonTop = styled.div`
  ${ButtonCommon};
  margin: 0 auto;
  top: ${({ theme }) => theme.windowHeight * 0.04}px;
  height: ${({ theme }) => theme.windowHeight * 0.05}px;
  width: ${({ theme }) => theme.windowWidth * 0.3}px;
`;

export const ButtonBottom = styled.div`
  ${ButtonCommon};
  margin: 0 auto;
  bottom: ${({ theme }) => theme.windowHeight * 0.04}px;
  height: ${({ theme }) => theme.windowHeight * 0.05}px;
  width: ${({ theme }) => theme.windowWidth * 0.3}px;
`;

export const ButtonLeft = styled.div`
  ${ButtonCommon};
  margin: auto 0;
  left: ${({ theme }) => theme.windowWidth * 0.04}px;
  width: ${({ theme }) => theme.windowWidth * 0.05}px;
  height: ${({ theme }) => theme.windowWidth * 0.05}px;
  border-radius: 50%;
  opacity: ${({ transit }) => (transit >= 0 ? 1 : 0)};
  transform: rotate(${({ transit }) => transit * 90}deg);
`;

export const ButtonRight = styled.div`
  ${ButtonCommon};
  margin: auto 0;
  right: ${({ theme }) => theme.windowWidth * 0.04}px;
  width: ${({ theme }) => theme.windowWidth * 0.05}px;
  height: ${({ theme }) => theme.windowWidth * 0.05}px;
  border-radius: 50%;
  opacity: ${({ transit }) => (transit >= 0 ? 1 : 0)};
  transform: rotate(${({ transit }) => -transit * 90}deg);
`;
