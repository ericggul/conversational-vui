import styled from "styled-components";
import { FlexCenterStyle, lengthConverterPer375 } from "@S/responsive/display";

export const StyledVoiceInput1 = styled.div`
  position: fixed;
  bottom: 0;
  top: auto;
  ${FlexCenterStyle};
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => lengthConverterPer375(theme, 130)}px;
  flex-direction: column;
`;

export const DummyAudioElement1 = styled.audio`
  background: black;
  width: 4rem;
`;

export const Time1 = styled.div`
  ${FlexCenterStyle};
  position: absolute;
  flex-direction: column;
`;

export const Recorder1 = styled.div``;

export const Button1 = styled.div`
  height: ${({ theme }) => lengthConverterPer375(theme, 86)}px;
  width: ${({ theme }) => lengthConverterPer375(theme, 86)}px;
  border-radius: 50%;

  background: ${({ theme, recording }) =>
    recording ? theme.palette.RECORD_DARK_RED : theme.palette.RECORD_LIGHT_RED};
  transition: background 0.3s;
`;
