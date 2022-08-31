import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledInstructions = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  background: rgb(10, 2, 2);
  color: white;
  font-family: Courier New;
  font-weight: bold;
`;

export const Instructions = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 5vw;
    margin: 1vw 0;
  }
  p {
    font-size: 1.2vw;
    margin: 0.5vw 0;
  }
`;

export const Button = styled.div`
  background: white;
  color: rgb(10, 2, 2);
  font-size: 2vw;
  margin: 3vw 0;
  ${FlexCenterStyle};
  padding: 1vw 0;
  width: 15vw;
  cursor: pointer;
`;
