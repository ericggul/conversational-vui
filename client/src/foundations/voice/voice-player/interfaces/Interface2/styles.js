import styled, { css } from "styled-components";
import {
  FlexCenterStyle,
  lengthConverterPer375,
  lengthConverter,
} from "@S/responsive/display";

const STANDARD_IDX = 130 / 5 ** 0.7;
const IMG_RATIO = 0.8;
const BORDER_RATIO = 0.5 - IMG_RATIO / 2;
const IMG_IDX = STANDARD_IDX * IMG_RATIO;
const BORDER_IDX = STANDARD_IDX * BORDER_RATIO;

const ELEMENT_WIDTH = 205;
const ELEMENT_HEIGHT = 62;
const BAR_WIDTH = 145;
const EXPAND_WIDTH = 30;
const IMG_SIZE = 40;

const appear = css`
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: appear 0.5s;
`;

export const VoiceElement1 = styled.div`
  position: relative;
  width: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * STANDARD_IDX)}px;
  min-height: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * STANDARD_IDX)}px;
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.BORDER};

  ${({ theme, leftAlign, width }) =>
    leftAlign
      ? `
      margin-left: ${
        lengthConverterPer375(theme, 60) -
        lengthConverterPer375(theme, width * 0.5 * STANDARD_IDX)
      }px;
      margin-right: auto;`
      : `
      margin-right: ${
        lengthConverterPer375(theme, 60) -
        lengthConverterPer375(theme, width * 0.5 * STANDARD_IDX)
      }px;
      margin-left: auto;
      `};

  ${({ theme, marginTop, width }) =>
    `margin-top: -${lengthConverterPer375(theme, marginTop * BORDER_IDX)}`}px;

  transition: all 0.4s;
`;

export const ProgressWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: transparent;
  // overflow: hidden;
`;

export const Progress1 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #9d9d9d;
  overflow: hidden;
`;

export const ProgressSvg = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  ${appear};
  overflow: hidden;
`;

export const ProgressCircle = styled.circle`
  stroke: #9d9d9d;
  fill: ${({ theme }) => theme.palette.BORDER};

  r: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * STANDARD_IDX) * 0.45}px;
  stroke-width: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * STANDARD_IDX) * 0.1}px;
  cx: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * STANDARD_IDX) * 0.5}px;
  cy: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * STANDARD_IDX) * 0.5}px;
  stroke-dasharray: ${({ theme, width }) =>
      lengthConverterPer375(theme, width * STANDARD_IDX) * 0.45 * 2 * Math.PI}
    ${({ theme, width }) =>
      lengthConverterPer375(theme, width * STANDARD_IDX) * 0.45 * 2 * Math.PI};
  stroke-dashoffset: ${({ theme, width, audioDuration, seekPos }) =>
    lengthConverterPer375(theme, width * STANDARD_IDX) *
    0.45 *
    2 *
    Math.PI *
    (1 - seekPos / audioDuration)};
`;

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${FlexCenterStyle};
  color: white;
  font-size: 1.3rem;
`;

export const Profile1 = styled.div`
  position: absolute;

  width: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * IMG_IDX)}px;
  height: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * IMG_IDX)}px;

  top: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * BORDER_IDX)}px;
  left: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * BORDER_IDX)}px;

  font-size: ${({ theme, width }) => lengthConverterPer375(theme, width * 8)}px;

  background: white;
  border-radius: 50%;

  ${appear};
`;

export const StatusIconWrapper = styled.div`
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: appear 0.5s reverse;
  ${FlexCenterStyle};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const DurationText = styled.div`
  position: absolute;
  font-size: 1.5rem;

  ${({ leftAlign }) =>
    leftAlign ? "left: calc(90% + 1rem)" : "right: calc(90% + 1rem)"};
  bottom: 0%;
`;
