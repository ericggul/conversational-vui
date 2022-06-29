import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledModal = styled.div`
  position: absolute;
  ${FlexCenterStyle};
  z-index: 1;
  backdrop-filter: blur(5px);
  background: rgba(100, 100, 100, 0.3);
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;

  ${({ modalOpened }) => (modalOpened ? "pointer-events: auto" : "pointer-events: none")};
  ${({ modalOpened }) => (modalOpened ? "opacity: 1" : "opacity: 0")};
  ${({ modalOpened }) => (modalOpened ? "visibility: visible" : "visibility: hidden")};
  ${({ modalOpened }) => (modalOpened ? "z-index: 1" : "z-index: -1")};
  ${({ modalOpened }) => (modalOpened ? "transform: translateY(0)" : "transform: translateY(-100%)")};
  transition: all 0.5s;
`;

export const Contents = styled.div`
  z-index: 2;
  width: ${({ theme }) => Math.min(theme.windowWidth * 0.8, 800)}px;
  height: ${({ theme }) => Math.min(theme.windowHeight * 0.9, 900)}px;
  background: rgb(255, 250, 250);
  border-radius: 0.5rem;
  position: relative;
  ${FlexCenterStyle};
  flex-direction: column;
  color: black;
`;

export const Image = styled.img`
  width: 70%;
  height: 50%;
  object-fit: contain;
`;

export const Text = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem 0;
`;

export const EmailContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;
  p {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const Input = styled.input.attrs({ spellCheck: false })`
  border: 3px solid black;
  outline: none;

  width: calc(100%-3px);
  font-size: 1.3rem;
  cursor: pointer;

  &::placeholder {
    color: #aaa;
  }
`;

export const TickingContainer = styled.div`
  ${({ visible }) => (visible ? `opaicty: 1` : `opacity: 0`)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  height: 4rem;
  transition: opacity 0.5s;
  p {
    font-size: 1rem;
  }
`;

export const Ticker = styled.input.attrs({ type: "checkbox" })`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const Send = styled.div`
  ${({ visible }) => (visible ? `opaicty: 1` : `opacity: 0`)};
  transition: opacity 0.5s;
  background: black;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  text-align: center;
`;

export const Cancel = styled.div`
  z-index: 5;
  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;
  font-size: 40px;
  font-weight: bold;
  background: rgb(255, 50, 50);
  border-radius: 50%;
  cursor: pointer;
  ${FlexCenterStyle};
  color: white;

  animation: rotate-continous 4s infinite linear;

  @keyframes rotate-continous {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
