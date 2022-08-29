import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 1000px;
  height: 700px;
  left: 1200px;
  top: 300px;
`;

export const Letter = styled.div`
  mix-blend-mode: hard-light;
  position: absolute;
  color: white;
  left: ${({ left }) => left}px;
  font-weight: bold;
  top: ${({ top }) => top}px;
  font-size: ${({ size }) => size}px;
  width: 10vh;
  height: 10vh;
  transform: rotate(${({ rotation }) => rotation}deg);

  font-family: Times New Roman;
`;
