import styled from "styled-components";

export const StyledInvisibleHand = styled.div`
  position: absolute;
  left: 1070px;
  top: 150px;
  width: 300px;
  height: 300px;

  @keyframes hand-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  animation: hand-rotate 30s infinite linear;

  ${({ triggerAnimate }) => (triggerAnimate ? `opacity: 1` : `opacity: 0`)};
  transition: opacity 0.5s ease-in-out;
`;
