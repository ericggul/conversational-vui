import styled, { css } from "styled-components";
import {
  FlexCenterStyle,
  lengthConverterPer375,
  lengthConverter,
} from "@S/responsive/display";

const STANDARD_IDX = 120 / 5 ** 0.7;
const IMG_RATIO = 0.8;
const BORDER_RATIO = 0.5 - IMG_RATIO / 2;
const IMG_IDX = STANDARD_IDX * IMG_RATIO;
const BORDER_IDX = STANDARD_IDX * BORDER_RATIO;

const ELEMENT_WIDTH = 205;
const ELEMENT_HEIGHT = 62;
const BAR_WIDTH = 145;
const EXPAND_WIDTH = 30;
const IMG_SIZE = 40;

const BarCommon = css`
  ${FlexCenterStyle};
  margin-top: ${({ theme }) => lengthConverterPer375(theme, 20.5)}px;
  margin-bottom: ${({ theme }) => lengthConverterPer375(theme, 20.5)}px;
  height: ${({ theme }) => lengthConverterPer375(theme, 21)}px;
  width: ${({ theme }) => lengthConverterPer375(theme, BAR_WIDTH)}px;
`;

const BarLeft = css`
  margin-right: 0;
  margin-left: auto;
`;

const BarRight = css`
  margin-left: 0;
  margin-right: auto;
`;

const ProgressCommon = css`
  ${FlexCenterStyle};
  margin-left: 0;
  margin-right: auto;
  margin-top: ${({ theme }) => lengthConverterPer375(theme, 20.5)}px;
  margin-bottom: ${({ theme }) => lengthConverterPer375(theme, 20.5)}px;
  height: ${({ theme }) => lengthConverterPer375(theme, 21)}px;
`;

const ProgressLeft = css`
  background: ${({ theme }) => theme.palette.CHAT_PROGRESS_DARK_GREEN};
`;

const ProgressRight = css`
  background: ${({ theme }) => theme.palette.CHAT_PROGRESS_DARK_BLUE};
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
        lengthConverterPer375(theme, 50) -
        lengthConverterPer375(theme, width * 0.5 * STANDARD_IDX)
      }px;
      margin-right: auto;`
      : `
      margin-right: ${
        lengthConverterPer375(theme, 50) -
        lengthConverterPer375(theme, width * 0.5 * STANDARD_IDX)
      }px;
      margin-left: auto;
      `};

  ${({ theme, marginTop, width }) =>
    `margin-top: -${lengthConverterPer375(theme, marginTop * BORDER_IDX)}`}px;

  transition: all 0.4s;
`;

export const Bar1 = styled.div`
  ${BarCommon};
  ${({ leftAlign }) => (leftAlign ? BarLeft : BarRight)};
`;

export const Progress1 = styled.div`
  position: relative;
  ${ProgressCommon};
  width: ${({ theme, audioDuration, seekPos }) =>
    (lengthConverterPer375(theme, BAR_WIDTH) * seekPos) / audioDuration}px;
  ${({ leftAlign }) => (leftAlign ? ProgressLeft : ProgressRight)};
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  ${FlexCenterStyle};
  color: white;
  font-size: 1.3rem;
`;

export const Profile1 = styled.img`
  position: absolute;

  width: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * IMG_IDX)}px;
  height: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * IMG_IDX)}px;

  top: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * BORDER_IDX)}px;
  left: ${({ theme, width }) =>
    lengthConverterPer375(theme, width * BORDER_IDX)}px;
  background: white;
  border-radius: 50%;

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

export const BarText1 = styled.div`
  z-index: 1;
  position: absolute;
  text-align: right;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.GRAY_TEXT};

  ${({ theme, leftAlign }) =>
    leftAlign
      ? `right: ${lengthConverterPer375(theme, 6)}`
      : `right: ${lengthConverterPer375(
          theme,
          6 + ELEMENT_WIDTH - BAR_WIDTH
        )}`}px;
`;

export const ProgressText1 = styled.div`
  position: absolute;
  text-align: right;
  font-size: 0.8rem;
  opacity: ${({ seekPos, audioDuration }) =>
    seekPos / audioDuration > 0.2 ? "0.8" : "0"};
  transition: opacity 0.4s;
  right: ${({ theme }) => lengthConverterPer375(theme, 6)}px;
`;
