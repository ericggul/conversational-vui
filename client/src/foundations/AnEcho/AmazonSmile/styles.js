import styled from "styled-components";

export const Smile = styled.div`
  position: absolute;

  height: 25px;
  left: 350px;
  top: 1000px;

  img {
    width: auto;
    height: 100%;
  }

  opacity: 0;
  @keyframes amazon-flies {
    0% {
      opacity: 0;
      transform: translate(0, 0) rotate(0deg);
    }

    100% {
      opacity: 1;
      transform: translate(1450px, -480px) rotate(1350deg) scale(4);
    }
  }
  ${({ triggerAnimate }) => triggerAnimate && `animation: amazon-flies 1.5s ease-in-out both;`}
  animation-delay: 20s;
`;
