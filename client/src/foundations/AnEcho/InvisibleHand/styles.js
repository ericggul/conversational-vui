import styled from "styled-components";

export const StyledInvisibleHand = styled.div`
  position: absolute;
  left: 980px;
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
`;
