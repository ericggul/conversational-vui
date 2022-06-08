import styled from "styled-components";
import { FlexCenterStyle, lengthConverterPer375 } from "@S/responsive/display";

export const StyledVoiceInput1 = styled.div`
  position: fixed;
  bottom: 0;
  top: auto;
  ${FlexCenterStyle};
  background: transparent;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => lengthConverterPer375(theme, 144)}px;
`;

export const DummyAudioElement1 = styled.audio`
  background: black;
  width: 4rem;
`;

export const Delete1 = styled.div`
  position: absolute;
  width: ${({ theme }) => lengthConverterPer375(theme, 72.5)}px;
  ${FlexCenterStyle};
  font-size: 2rem;
  left: 0rem;
  margin-top: ${({ theme }) => lengthConverterPer375(theme, 22.5)}px;
  right: 0;
`;

export const DeleteText = styled.div`
  width: ${({ theme }) => lengthConverterPer375(theme, 72.5)}px;
  ${FlexCenterStyle};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.GREY_TEXT};
`;

export const Time1 = styled.div`
  width: ${({ theme }) => lengthConverterPer375(theme, 72.5)}px;
  ${FlexCenterStyle};
  color: ${({ theme }) => theme.palette.RECORD_DARK_RED};
  font-size: 1.2rem;
`;

export const Button1 = styled.div`
  height: ${({ theme }) => lengthConverterPer375(theme, 230)}px;
  width: ${({ theme }) => lengthConverterPer375(theme, 230)}px;
  border-radius: 50%;

  background: ${({ theme, recording }) => (recording ? "#9D9D9D" : "#545454")};
  color: ${({ theme, recording }) => (recording ? "white" : "black")};
  transition: all 0.3s;

  margin-top: 0;
  margin-bottom: auto;
  line-height: ${({ theme }) => lengthConverterPer375(theme, 200)}px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
