import styled from "styled-components";

const getRandomArray = (array) => array[Math.floor(Math.random() * array.length)];
const EFFECTS = ["invert(100%)", "hue-rotate(180deg)", "saturate(400%)", "sepia(100%)"];

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: ${({ theme }) => theme.windowHeight}px;

  filter: ${({ triggered }) => triggered && getRandomArray(EFFECTS)};
  // filter: hue-rotate(60deg);
  // filter: saturate(200%) invert(100%);

  position: relative;

  z-index: -2;
`;
