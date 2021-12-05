import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const VoiceElement = styled.div`
  ${FlexCenterStyle};
  background: red;
  width: 3rem;
  height: 3rem;
  ${({ playing }) => (playing ? `background: pink` : `background: red`)};
`;

export const ProgressBar = styled.div`
  ${FlexCenterStyle};
`;
