import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledMonthDisplayer = styled.div`
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
`;

export const CalendarRow = styled.div`
  ${FlexCenterStyle};

  ${({ enableAnimation, idx }) => enableAnimation && `animation: rotate-${idx} 10s forwards;`}

  @keyframes rotate-${({ idx }) => idx} {
    from {
      transform: rotate(0) scale(1);
    }
    to {
      transform: rotate(360deg) scale(3);
    }
  }
`;

export const CalendarDay = styled.div`
  width: 6rem;
  height: 6rem;
  text-align: center;
`;

//Date Formatter
export const DayFormatter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1.4rem);
  grid-template-rows: repeat(3, 1.5rem);

  ${({ mouseEntered, color, enableEnlarge }) => (mouseEntered % 2 === 1 || !enableEnlarge) && `color: ${color}`};
  ${({ mouseEntered }) => `transform: scale(${mouseEntered / 4 + 1})`};

  transition: all 1s;
`;

export const Date = styled.div`
  ${FlexCenterStyle};
  text-align: center;

  ${({ reverse }) => reverse && "transform: scaleY(-1)"};

  font-size: 1rem;

  ${({ enableAnimation }) =>
    enableAnimation ? `animation: font-size-animation 60s infinite linear alternate, rotation-animation 4s infinite alternate;` : "  animation: rotation-animation 4s infinite alternate;"}

  animation-delay: ${({ delay }) => delay}s;

  // animations
  @keyframes font-size-animation {
    0% {
      font-size: 3rem;
    }
    0.1% {
      font-size: 1rem;
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
