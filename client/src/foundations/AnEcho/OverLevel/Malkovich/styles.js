import styled from "styled-components";

export const StyledMalkovich = styled.div`
  position: absolute;
  left: 750px;
  top: 300px;
  font-family: Neonderthaw;
  font-size: 65px;

  opacity: 0;

  transform: translate(-50%, -50%) rotate(-27deg);
  ${({ triggerAnimate }) => triggerAnimate && `animation: malkovich-appear 1s linear both;`}

  @keyframes malkovich-appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Text = styled.div`
  margin: -2rem 0;

  text-align: center;

  @keyframes blink {
    0% {
      text-shadow: none;
    }
    1% {
      text-shadow: 0 0 0.5rem white, 0 0 1rem white, 0 0 1.5rem white;
    }
    33% {
      text-shadow: 0 0 0.5rem white, 0 0 1rem white, 0 0 1.5rem white;
    }
  }

  animation: blink 3s infinite linear;
  animation-delay: ${({ delay }) => delay}s;
`;
