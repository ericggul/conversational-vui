import styled from "styled-components";

export const StyledMalkovich = styled.div`
  position: absolute;
  left: 650px;
  top: 350px;
  font-family: Neonderthaw;
  font-size: 65px;
  transform: translate(-50%, -50%) rotate(-27deg);
`;

export const Text = styled.div`
  margin: -2rem 0;

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
    34% {
      text-shadow: ;
    }
  }

  animation: blink 3s infinite linear;
  animation-delay: ${({ delay }) => delay}s;
`;
