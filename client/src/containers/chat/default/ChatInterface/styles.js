import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const ChatDisplay = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const ChatElement = styled.div`
  ${FlexCenterStyle};
  margin: 0.5rem;
`;

export const ChatProfile = styled.div`
  ${FlexCenterStyle};
`;

export const ChatContents = styled.div`
  ${FlexCenterStyle};
`;

export const VoiceElement = styled.div`
  ${FlexCenterStyle};
  background: red;
  width: 3rem;
  height: 3rem;
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
