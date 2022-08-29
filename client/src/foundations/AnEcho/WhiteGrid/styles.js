import styled from "styled-components";

export const WhiteGrid = styled.div`
  position: absolute;
  top: 860px;
  left: ${({ left }) => left}px;
  width: 75px;
  height: 75px;

  display: grid;
  grid-template-columns: repeat(5, 15px);
  grid-template-rows: repeat(5, 15px);

  transform: translate(-50%, -50%);
`;

export const SingleWhite = styled.div`
  margin: ${({ width }) => (15 - width) / 2}px;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  background: white;

  transform: rotate(${({ angle }) => angle}deg);
`;
