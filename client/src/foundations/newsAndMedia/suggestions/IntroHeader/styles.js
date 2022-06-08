import styled from "styled-components";

export const HeaderContainer = styled.div`
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  width: 200%;
  height: 1.5rem;
  padding: 0.5rem 0;
  background: black;
  color: ${({ color }) => color};
  position: relative;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity ${({ visibleSec }) => visibleSec}s;

  animation: infiniteMove ${({ rotateSec }) => rotateSec}s linear infinite;
  @keyframes infiniteMove {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(${({ theme }) => theme.windowWidth}px, 0);
    }
  }
`;

export const MovingHeader = styled.div`
  position: absolute;
  top: ${({ top }) => top}rem;
  padding: 0 0.5rem;
  left: ${({ idx, elNumber, theme }) => (idx / elNumber) * theme.windowWidth * 2 - theme.windowWidth}px;
`;

export const FlipHeaderUnit = styled.div`
  margin-top: 1rem;

  display: inline-block;
  posotion: relative;
  padding: 0 2rem;
`;

export const FlipHeaderSpan = styled.span`
  position: relative;
  display: inline-block;
  animation: flip 2s infinite;

  @keyframes flip {
    0%,
    80% {
      transform: rotateY(360deg);
    }
  }
`;
