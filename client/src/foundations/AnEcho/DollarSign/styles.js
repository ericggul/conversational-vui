import styled from "styled-components";

export const StyledDollarSign = styled.div`
  position: absolute;
  font-size: 30px;
  top: 1200px;
  left: 170px;

  animation: rotate-keep 3s infinite alternate ease-in-out;

  @keyframes rotate-keep {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(1440deg);
    }
  }
`;
