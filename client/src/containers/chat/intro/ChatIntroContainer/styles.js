import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledChatIntroContainer = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
`;

export const InputSector = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const InputBox = styled.input``;

export const InputBoxImage = styled.input.attrs({
  type: "file",
  accept: "image/png, image/jpeg",
})`
  border: 1px solid dash;
`;

export const EnterSector = styled.div`
  ${FlexCenterStyle};
`;

export const EnterButton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: black;
`;
