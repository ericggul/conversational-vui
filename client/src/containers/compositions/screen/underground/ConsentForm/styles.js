import styled, { css, keyframes } from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

const appear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const Background = styled.div`
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  margin: 0;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  animation: ${appear} 0.5s;
`;

export const Container = styled.div`
  width: ${({ theme }) => theme.windowWidth * 0.8}px;
  height: ${({ theme }) => theme.windowHeight * 0.8}px;
  border-radius: 0.4rem;
  background: hsl(50, 100%, 50%);
  transition: all 0.5s;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: calc(50% + 8.5rem);
  display: flex;
  justify-content: end;
  flex-direction: column;
`;

export const NextButton = styled.div`
  ${FlexCenterStyle};
  margin-top: 5rem;
  border: 10px solid white;
  cursor: pointer;
  ${FlexCenterStyle};
  color: white;
  font-size: ${({ theme }) => theme.windowWidth * 0.04}px;
  font-weight: bold;
  transition: all 0.5s;
  height: ${({ theme }) => theme.windowHeight * 0.05}px;
  width: ${({ theme }) => theme.windowWidth * 0.3}px;
  box-shadow: 0 0 1rem white;
  filter: blur(${({ showTexts }) => 20 - showTexts * 5}px);
`;

export const Block = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: 100%;
  transition: all 0.5s;
  height: 17rem;

  // background: ${({ color }) => color};
  backgroudn: hsl(50, 100%, 50%);

  animation: appear-from-left 0.5s backwards ease-out;
  @keyframes appear-from-left {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  justfiy-content: center;
  flex-direction: column;
  width: ${({ theme }) => theme.windowWidth * 0.64}px;
  color: white;
`;

export const Header = styled.h1`
  margin: 1.5rem 0;
  padding: 0;
`;

export const Contents = styled.textarea.attrs({ spellCheck: "false" })`
  font-size: 0.6rem;

  outline: none;
  background: transparent;
  color: white;

  height: 3rem;
  white-space: pre-wrap;
  text-size-adjust: auto;
  border: 1vw ridge white;
  border-radius: 0.3rem;
  padding: 1rem;
  width: calc(100% - 2rem - 2vw);
`;

export const AgreePart = styled.div`
  ${FlexCenterStyle};
  margin: 2rem 0;
  margin-left: auto;
`;

export const AgreeSector = styled.div`
  ${FlexCenterStyle};
`;

export const Input = styled.input.attrs({
  type: "checkbox",
})`
  width: 2rem;
  height: 2rem;

  outline: none;
  margin: 0;
  -webkit-appearance: value;
  -moz-appearance: value;
  appearance: value;

  outline: none;

  cursor: pointer;
`;

export const Label = styled.label`
  color: white;
`;
