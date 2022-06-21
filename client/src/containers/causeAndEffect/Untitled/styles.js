import styled, { css } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;

  transition: all 0.01s;
  ${FlexCenterStyle};
  flex-direction: column;
  background: black;
`;
export const Text = styled.div`
  font-size: 10rem;
  font-weight: bold;
  color: ${({ color }) => color};

  ${({ show }) => (show ? "opacity: 1" : "opacity: 0")};
`;
