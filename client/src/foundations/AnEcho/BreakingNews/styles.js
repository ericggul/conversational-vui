import styled from "styled-components";

export const StyledBreakingNews = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 1500px;
  height: 1000px;
`;

export const Letter = styled.div.attrs((props) => ({
  style: {
    left: props.left + "px",
    top: props.top + "px",
    opacity: props.opacity,
  },
}))`
  position: absolute;
  color: white;
  font-weight: bold;

  width: 30px;
  font-size: 10px;
  font-family: Times New Roman;
`;
