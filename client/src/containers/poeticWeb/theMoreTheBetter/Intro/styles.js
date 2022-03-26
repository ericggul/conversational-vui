import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  min-height: ${({ theme }) => theme.windowHeight}px;

  flex-direction: column;

  margin: 0 0;
  padding-top: 2rem;
  overflow-x: hidden;
  background: black;
`;
