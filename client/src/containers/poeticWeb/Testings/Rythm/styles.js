import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;

  flex-direction: column;
  font-family: TimesNewRomand, "Times New Roman";
`;

export const NewsEl = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const NewsTitle = styled.div`
  font-size: 1.5rem;

  flex-direction: column;
`;

export const NewsAbstract = styled.div`
  font-size: 1rem;
`;

export const LargeSector = styled.div`
  ${FlexCenterStyle};
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  flex-direction: column;
  background: black;
`;

export const Sector = styled.div`
  ${FlexCenterStyle};
  width: ${({ theme }) => Math.min(theme.windowWidth, theme.windowHeight) * 0.8}px;
  height: ${({ theme }) => Math.min(theme.windowWidth, theme.windowHeight) * 0.8}px;
  border-radius: 50%;
  flex-direction: column;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  box-shadow: 0 0 0.5rem ${(props) => props.background}, 0 0 2rem ${(props) => props.background};

  transition: background 0.3s;
  animation: appear ${({ seconds }) => seconds}s infinite;

  @keyframes appear {
    0% {
      transform: ${({ theme }) => `translate(-${theme.windowWidth}px, 0)`};
    }
    20% {
      transform: ${({ theme }) => `translate(0, 0)`};
    }
    80% {
      transform: ${({ theme }) => `translate(0, 0)`};
    }
    100% {
      transform: ${({ theme }) => `translate(${theme.windowWidth}px, 0)`};
    }
  }
`;

export const Header = styled.div`
  ${FlexCenterStyle};
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  width: 80%;

  margin: 0.5rem;
  margin-top: 1rem;
`;

export const Body = styled.div`
  font-size: 0.4rem;
  width: 80%;
  margin: 0.5rem;
`;
