import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;

  flex-direction: column;

  // font-family: TimesNewRomand, "Times New Roman";
  margin: -2rem 0;
  overflow-x: hidden;
  background: black;
`;

export const HeaderContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  height: 5rem;
  margin: 2rem 0;
  background: black;
  color: white;
  position: relative;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s;
`;

export const Header = styled.div`
  position: absolute;
  top: 1rem;
  padding: 0 2rem;

  animation: infiniteMove ${({ rotateSec }) => rotateSec}s linear infinite;
  animation-delay: -${({ idx, rotateSec, elNumber }) => (idx * rotateSec) / elNumber}s;

  @keyframes infiniteMove {
    0% {
      transform: translate(-${({ theme }) => theme.windowWidth}px, 0);
    }
    100% {
      transform: translate(${({ theme }) => theme.windowWidth}px, 0);
    }
  }
`;

export const NewsEl = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1.2rem;

  width: 80%;
  margin-left: 10%;
  cursor: pointer;
`;

export const NewsTitle = styled.div`
  font-size: 1.5rem;
  margin: 0.3rem 0;
  flex-direction: column;
`;

export const NewsAbstract = styled.div`
  font-size: 1rem;
  margin: 0.3rem 0;
`;
