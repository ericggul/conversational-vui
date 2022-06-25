import styled, { css } from "styled-components";

export const Cover = styled.div`
  position: relative;
`;

const Common = css`
  color: #037d8b;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.3rem;
    margin-top: -0.2rem;
    margin-left: -0.2rem;
  }
`;

export const RaitingRelative = styled.span`
  position: relative;
  ${Common};
`;

export const RaitingAbsolute = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  ${Common};
`;
