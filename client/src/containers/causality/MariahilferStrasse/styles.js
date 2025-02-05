import styled, { css } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;

  transition: all 0.01s;
  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${({ triggered }) => (triggered ? "#fff" : "#000")};
`;
