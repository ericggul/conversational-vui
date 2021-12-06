import styled from "styled-components";
import { FlexCenterStyle, lengthConverterPer375 } from "@S/responsive/display";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  background: #ddd;
  flex-direction: column;
`;

export const ChatHeader = styled.div`
  ${FlexCenterStyle};
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  min-height: ${({ theme }) => lengthConverterPer375(theme, 50)}px;
  background: ${({ theme }) => theme.palette.HEADER};
  flex-direction: column;
`;

export const ChatDisplay = styled.div`
  display: flex;
  top: auto;
  margin-top: auto;
  padding-top: 1rem;
  margin-bottom: ${({ theme }) => lengthConverterPer375(theme, 130)}px;

  overflow-y: scroll;
  overflow-x: hidden;
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
  color: #333;
  margin-top: -0.7rem;
  margin-bottom: 0.3rem;
  ${({ theme, leftAlign }) =>
    leftAlign
      ? `margin-left: ${lengthConverterPer375(
          theme,
          25
        )}px; margin-right: auto; text-align: left;`
      : `margin-right: ${lengthConverterPer375(
          theme,
          25
        )}px; margin-left: auto; text-align: right;`}

  ${({ theme, isTime }) =>
    isTime &&
    `font-size: .8rem; color: ${theme.palette.GRAY_TEXT}; margin-bottom: 0; margin-top: .3rem;`}
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
