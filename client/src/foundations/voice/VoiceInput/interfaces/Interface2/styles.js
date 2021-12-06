import styled from "styled-components";
import { FlexCenterStyle, lengthConverterPer375 } from "@S/responsive/display";

export const StyledVoiceInput1 = styled.div`
  position: fixed;
  bottom: 0;
  top: auto;
  ${FlexCenterStyle};
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => lengthConverterPer375(theme, 130)}px;
  background: linear-gradient(#eee, #ccc);
`;

export const DummyAudioElement1 = styled.audio`
  background: black;
  width: 4rem;
`;

export const Delete1 = styled.div`
  flex-direction: column;
  width: ${({ theme }) => lengthConverterPer375(theme, 86)}px;
  ${FlexCenterStyle};
  font-size: 1.5rem;
  margin-top: 0.8rem;
`;

export const DeleteText = styled.div`
  width: ${({ theme }) => lengthConverterPer375(theme, 86)}px;
  ${FlexCenterStyle};
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.GREY_TEXT};
`;

export const Time1 = styled.div`
  width: ${({ theme }) => lengthConverterPer375(theme, 86)}px;
  ${FlexCenterStyle};
  color: ${({ theme }) => theme.palette.RECORD_DARK_RED};
  font-size: 1.2rem;
`;

export const Button1 = styled.div`
  height: ${({ theme }) => lengthConverterPer375(theme, 86)}px;
  width: ${({ theme }) => lengthConverterPer375(theme, 86)}px;
  border-radius: 50%;

  background: ${({ theme, recording }) =>
    recording ? theme.palette.RECORD_DARK_RED : theme.palette.RECORD_LIGHT_RED};
  color: ${({ theme, recording }) => (recording ? "white" : "black")};
  transition: all 0.3s;

  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: ${({ theme }) => lengthConverterPer375(theme, 86)}px;
  margin: ${({ theme }) => lengthConverterPer375(theme, 15)}px;
`;
