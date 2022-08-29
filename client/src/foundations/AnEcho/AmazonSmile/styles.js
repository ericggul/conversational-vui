import styled from "styled-components";

export const Smile = styled.div`
  position: absolute;

  height: 25px;
  left: 350px;
  top: 1000px;

  //   height: 100px;
  //   left: 1660px;
  //   top: 490px;

  //   transform: rotate(-90deg);

  img {
    width: auto;
    height: 100%;
  }

  @keyframes amazon-flies {
    from {
      transform: translate(0, 0) rotate(0deg);
    }

    to {
      transform: translate(1450px, -480px) rotate(1350deg) scale(4);
    }
  }

  animation: amazon-flies 1.5s ease-in-out forwards;
`;
