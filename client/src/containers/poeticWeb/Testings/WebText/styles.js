import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  grid-template-columns: repeat(5, 20vw);
  grid-template-rows: repeat(4, 25vh);
  display: grid;

  flex-direction: column;
  background: black;
`;

export const LargeSector = styled.div`
  ${FlexCenterStyle};
  width: 20vw;
  height: 25vh;
  flex-direction: column;
  background: black;
`;

export const Sector = styled.div`
  display: flex;
  align-items: center;
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  flex-direction: column;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  box-shadow: 0 0 0.5rem ${(props) => props.background}, 0 0 2rem ${(props) => props.background};

  transition: background 0.3s;
`;

export const Header = styled.div`
  font-size: rem;
  font-weight: bold;
  width: 80%;

  margin: 0.5rem;
  margin-top: 1rem;
`;

export const Body = styled.div`
  font-size: 0.4rem;
  width: 80%;
  margin: 0.5rem;
`;
