import styled from "styled-components";

import { FlexCenterStyle } from "@S/responsive/display";

export const StyledIntro = styled.div`
  background: #61c9b8;
  font-family: Neutraface;
  font-weight: bold;
  ${FlexCenterStyle};
  color: #fff;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  font-size: 20rem;
`;
