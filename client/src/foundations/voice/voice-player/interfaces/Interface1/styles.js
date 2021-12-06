import styled, { css } from "styled-components";
import {
  FlexCenterStyle,
  lengthConverterPer375,
  lengthConverter,
} from "@S/responsive/display";

const ELEMENT_WIDTH = 205;
const ELEMENT_HEIGHT = 62;
const BAR_WIDTH = 140;
const EXPAND_WIDTH = 30;
const IMG_SIZE = 45;

const ElementCommon = css`
  ${FlexCenterStyle};
  position: relative;
  width: ${({ theme }) => lengthConverterPer375(theme, ELEMENT_WIDTH)}px;
  height: ${({ theme }) => lengthConverterPer375(theme, ELEMENT_HEIGHT)}px;
  margin: ${({ theme }) => lengthConverterPer375(theme, 2)}px;
`;

const ElementLeft = css`
  margin-right: auto;
  margin-left: ${({ theme }) => lengthConverterPer375(theme, 17)}px;
  background: ${({ theme }) => theme.palette.CHAT_BACKGROUND_GREEN};
`;

const ElementRight = css`
  margin-left: auto;
  margin-right: ${({ theme }) => lengthConverterPer375(theme, 17)}px;
  background: ${({ theme }) => theme.palette.CHAT_BACKGROUND_BLUE};
`;

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
  background: ${({ theme }) => theme.palette.CHAT_PROGRESS_LIGHT_GREEN};
`;

const BarRight = css`
  margin-left: 0;
  margin-right: auto;
  background: ${({ theme }) => theme.palette.CHAT_PROGRESS_LIGHT_BLUE};
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
  ${ElementCommon};
  ${({ leftAlign }) => (leftAlign ? ElementLeft : ElementRight)};
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

export const Profile1 = styled.img`
  position: absolute;
  ${({ theme, leftAlign }) =>
    leftAlign
      ? `background: ${theme.palette.CHAT_PROGRESS_LIGHT_GREEN}`
      : `background: ${theme.palette.CHAT_PROGRESS_LIGHT_BLUE}`};
  ${({ theme, leftAlign }) =>
    leftAlign
      ? `left: ${lengthConverterPer375(theme, 10)}`
      : `right: ${lengthConverterPer375(theme, 10)}`}px;
  width: ${({ theme }) => lengthConverterPer375(theme, IMG_SIZE)}px;
  height: ${({ theme }) => lengthConverterPer375(theme, IMG_SIZE)}px;
  border-radius: 50%;
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
