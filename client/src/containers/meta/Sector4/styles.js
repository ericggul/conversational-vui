import styled from "styled-components";
import { FlexCenterStyle } from "@S/responsive/display";

export const StyledSector4 = styled.div`
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
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
`;

export const Displayer = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const FrameworkContainer = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const FrameworkRow = styled.div`
  ${FlexCenterStyle};
`;

export const FrameworkIndicator = styled.div`
  font-size: 1.2rem;
  width: 8rem;
  margin-right: 2rem;
  font-weight: bold;
  align-items: end;
  justify-content: end;
  text-align: end;
`;

export const FrameworkCluster = styled.div`
  width: 15rem;
  ${FlexCenterStyle};
  align-items: start;
  justify-content: start;
`;

export const IconContainer = styled.div`
  ${FlexCenterStyle};
`;

export const Icon = styled.div`
  ${FlexCenterStyle};
  font-size: 3rem;
  width: 3rem;
  height: 3rem;
  margin: 1rem;
`;

export const AIcon = styled.div`
  ${FlexCenterStyle};
  font-size: 3rem;
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
