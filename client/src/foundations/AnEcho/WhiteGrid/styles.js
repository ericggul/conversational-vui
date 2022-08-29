import styled from "styled-components";

export const WhiteGrid = styled.div.attrs((props) => ({
  style: {
    left: `${props.left}px`,
  },
}))`
  position: absolute;
  top: 860px;
  width: 75px;
  height: 75px;

  display: grid;
  grid-template-columns: repeat(5, 15px);
  grid-template-rows: repeat(5, 15px);

  transform: translate(-50%, -50%);
`;

export const SingleWhite = styled.div.attrs((props) => ({
  style: {
    margin: `${(15 - props.width) / 2}px`,
    width: `${props.width}px`,
    height: `${props.width}px`,
    transform: `rotate(${props.angle}deg)`,
  },
}))`
  background: white;
`;
