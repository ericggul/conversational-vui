import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledSector3 = styled.div`
  width: 100%;
  height: 100%;
  background: #aaa;
  ${FlexCenterStyle};
  flex-direction: column;
  word-break: keep-all;
`;

export const Header = styled.div`
  ${FlexCenterStyle};
  font-size: 2rem;
  margin-bottom: 4rem;

  ${({ theme }) => theme.windowWidth < 768 && `margin-bottom: 1rem;`}
  font-weight: bold;
`;

export const DisplayerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    4,
    ${({ theme }) => theme.windowWidth * 0.22}px
  );
  grid-template-rows: repeat(2, ${({ theme }) => theme.windowHeight * 0.35}px);

  ${({ theme }) =>
    theme.windowWidth < 768 &&
    `grid-template-columns: repeat(2, ${theme.windowWidth * 0.44}px);`}
  ${({ theme }) =>
    theme.windowWidth < 768 &&
    `grid-template-rows: repeat(4, ${theme.windowHeight * 0.23}px);`}
`;

export const Front = styled.div`
  ${FlexCenterStyle};
  align-items: end;
  flex-direction: row;
  box-sizing: content-box;
  position: relative;
`;

export const Background = styled.div`
  margin: 1rem;
  margin-bottom: 3.3rem;
  position: absolute;
  width: 0;
  left: 0;
  height: calc(100% - 4.3rem);
  ${(props) => props.open && "background: white;"}
  ${(props) => props.open && "width: calc(100% - 2rem);"}
  z-index: 0;
  transition: all 0.3s;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.2rem white;
`;

export const Back = styled.div``;

export const Number = styled.div`
  z-index: 1;
  margin-left: -1rem;
  margin-right: -1rem;
  font-size: 15rem;
  ${({ theme }) => theme.windowWidth < 768 && `font-size: 10rem;`}
  font-weight: light;
  cursor: pointer;
`;

export const Question = styled.div`
  z-index: 1;
  margin: 1.3rem;
  margin-bottom: 3.3rem;
  margin-left: 1.4rem;
  width: 90%;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const Answer = styled.div``;
