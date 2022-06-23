import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Background = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;

  ${({ everythingGetEnlarge }) => everythingGetEnlarge && "background: black"};
  ${({ everythingGetEnlarge }) => everythingGetEnlarge && "cursor: pointer"};
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  transition: background 1s ease-in;
`;

export const Contents = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;

  animation: appear 2s backwards ease-in;

  @keyframes appear {
    from {
      opacity: 0;
      filter: blur(20px);
    }
    to {
      opacity: 1;
      filter: blur(0);
    }
  }
  opacity: ${({ opacity }) => opacity};
  position: relative;

  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  transition: opacity 1s ease-in;
`;

export const CalendarRow = styled.div`
  ${FlexCenterStyle};

  ${({ enableAnimation, idx }) => enableAnimation && `animation: rotate-${idx} 7s forwards;`}

  @keyframes rotate-${({ idx }) => idx} {
    0% {
      transform: rotate(0) scale(1);
    }
    20% {
      transform: rotate(0) scale(1);
    }
    100% {
      transform: rotate(${({ rotate }) => rotate}deg) scale(${({ scaleSize }) => scaleSize});
    }
  }

  animation-delay: ${({ animationDelay }) => animationDelay}s;
`;

export const CalendarDay = styled.div`
  width: 6vw;
  height: 6vw;
  text-align: center;
`;

//Date Formatter
export const DayFormatter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1.5vw);
  grid-template-rows: repeat(3, 1.5vw);

  ${({ mouseEntered, color, enableEnlarge }) => (mouseEntered % 2 === 1 || !enableEnlarge) && `color: ${color}`};
  ${({ mouseEntered }) => `transform: scale(${mouseEntered / 3 + 1})`};

  transition: all 1s;
`;

export const Date = styled.div`
  ${FlexCenterStyle};
  text-align: center;

  ${({ reverse }) => reverse && "transform: scaleY(-1)"};

  font-size: 1vw;

  ${({ enableAnimation }) =>
    enableAnimation ? `animation: font-size-animation 60s infinite linear alternate, rotation-animation 4s infinite alternate;` : "animation: rotation-animation 4s infinite alternate;"}

  animation-delay: ${({ delay }) => delay}s;

  // animations
  @keyframes font-size-animation {
    0% {
      font-size: 3vw;
    }
    0.2% {
      font-size: 1vw;
    }
  }

  @keyframes rotation-animation {
    0% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(180deg);
    }
  }
`;
