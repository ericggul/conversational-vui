import styled, { css } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const WholeContainer = styled.div`
  ${FlexCenterStyle};

  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  background: black;
  overflow: hidden;
  cursor: pointer;
`;

export const ArrowContainer = styled.div`
  font-size: 3rem;
  font-weight: bold;
  width: 3rem;
  height: 3rem;

  border-radius: 50%;

  margin: 3rem;
  ${FlexCenterStyle};
  cursor: pointer;
`;

export const StyledMonthDisplayer = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const CalendarRow = styled.div`
  ${FlexCenterStyle};
`;

export const CalendarDay = styled.div`
  width: 5rem;
  height: 5rem;

  text-align: center;
  ${FlexCenterStyle};
  transition: all 1s;
`;

//Date Formatter Styles
const DayCommon = css`
  ${FlexCenterStyle};

  font-size: 3rem;
  width: 4rem;
  height: 4rem;

  background: black;
  color: white;
  transition: all 1s;
`;

export const Day = styled.div`
  ${DayCommon};

  border: ${({ UIVersion }) => (UIVersion > 0 ? "4px solid black" : "4px solid transparent")};
  border-radius: ${({ UIVersion }) => (UIVersion === 0 || UIVersion === 1) && "50%"};

  ${({ specialHover }) => specialHover && "cursor: help"};
  ${({ mouseEntered, specialHover, UIVersion }) =>
    mouseEntered % 2 === 1
      ? specialHover
        ? UIVersion > 0
          ? `background: red; color: white; border: 4px solid red;`
          : `background: red; color: white;`
        : `background: black; color: white;`
      : `background: white; color: black;`}

  ${({ UIVersion }) => UIVersion === 3 && `transform: rotate(90deg);`}
  ${({ UIVersion }) => UIVersion === 4 && `transform: rotate(0deg) skew(10deg, 5deg);`}
  ${({ UIVersion }) => UIVersion === 5 && `transform: rotate(540deg) skew(-10deg, 5deg) scaleY(1.6) perspective(2rem) rotateY(10deg);`}
  ${({ UIVersion }) => UIVersion === 6 && `transform: rotate(270deg) skew(30deg, 40deg) scaleY(3.0) perspective(1rem) rotateY(10deg);`}
  ${({ UIVersion }) => UIVersion === 7 && `transform: matrix(0.0, 2.0, 3.0, 1.0, 5.0, 6.0);`}
  ${({ UIVersion }) => UIVersion === 8 && `transform: scale(10);`}
  ${({ UIVersion }) => UIVersion === 9 && `opacity: 0.2;`}
`;

export const Day7 = styled.div`
  ${DayCommon};
  border: 4px solid black;
  transform: rotate(180deg) skew(20deg 10deg);
  ${({ specialHover }) => specialHover && "cursor: help"};
  ${({ mouseEntered, specialHover }) =>
    mouseEntered % 2 === 1 ? (specialHover ? `background: red; color: white; border: 4px solid red;` : `background: black; color: white;`) : `background: white; color: black;`}
`;

export const Day8 = styled.div`
  ${DayCommon};
  border: 4px solid black;
  transform: rotate(180deg) skew(20deg 10deg);
  ${({ specialHover }) => specialHover && "cursor: help"};
  ${({ mouseEntered, specialHover }) =>
    mouseEntered % 2 === 1 ? (specialHover ? `background: red; color: white; border: 4px solid red;` : `background: black; color: white;`) : `background: white; color: black;`}
`;

export const Day9 = styled.div`
  ${DayCommon};
  border: 4px solid black;
  transform: rotate(180deg) skew(20deg 10deg);
  ${({ specialHover }) => specialHover && "cursor: help"};
  ${({ mouseEntered, specialHover }) =>
    mouseEntered % 2 === 1 ? (specialHover ? `background: red; color: white; border: 4px solid red;` : `background: black; color: white;`) : `background: white; color: black;`}
`;
