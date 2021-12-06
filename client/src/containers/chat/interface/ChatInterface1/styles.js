import styled from "styled-components";
import { FlexCenterStyle, lengthConverterPer375 } from "@S/responsive/display";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  flex-direction: column;
`;

export const ChatHeader = styled.div`
  ${FlexCenterStyle};
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  height: ${({ theme }) => lengthConverterPer375(theme, 50)}px;
  background: ${({ theme }) => theme.palette.HEADER};
  flex-direction: column;
`;

export const ChatDisplay = styled.div`
  display: flex;
  top: auto;
  margin-top: auto;
  margin-bottom: ${({ theme }) => lengthConverterPer375(theme, 130)}px;

  overflow-y: scroll;
  align-items: center;
  width: ${({ theme }) => lengthConverterPer375(theme, 375)}px;
  flex-direction: column;
`;

export const ChatElement = styled.div`
  ${FlexCenterStyle};
`;

export const ChatProfile = styled.div`
  ${FlexCenterStyle};
`;

export const ChatContents = styled.div`
  ${FlexCenterStyle};
  margin: 0.3rem auto;
  ${({ theme, leftAlign }) =>
    leftAlign
      ? `margin-left: ${lengthConverterPer375(theme, 25)}`
      : `margin-right: ${lengthConverterPer375(theme, 25)}`}px;

  ${({ leftAlign }) => (leftAlign ? `text-align: left` : `text-align: right`)};

  ${({ theme, isTime }) =>
    isTime && `font-size: .8rem; color: ${theme.palette.GRAY_TEXT}`}
`;

export const ChatSend = styled.div`
  ${FlexCenterStyle};
`;

export const ChatInput = styled.input``;

export const SendButton = styled.input`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: black;
`;
