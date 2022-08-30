import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 1000px;
  height: 700px;
  left: 1200px;
  top: 200px;
`;

export const Letter = styled.div.attrs((props) => ({
  style: {
    left: props.left + "px",
    top: props.top + "px",
    fontSize: props.size + "px",
    transform: `rotate(${props.rotation}deg)`,
  },
}))`
  mix-blend-mode: hard-light;
  position: absolute;
  color: white;
  font-weight: bold;

  width: 10vh;
  height: 10vh;

  font-family: Times New Roman;
`;
