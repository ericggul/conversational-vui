import styled, { css } from "styled-components";

const TextCommon = css`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export const NumberRows = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const NumberRowA = styled.div`
  ${TextCommon};
  font-size: 13px;
  font-family: Courier New;
`;

export const NumberRowB = styled.div`
  ${TextCommon};
  font-size: 15px;
  font-family: Courier New;
`;

export const NumberRowC = styled.div`
  ${TextCommon};
  font-size: 20px;
  font-family: Courier New;
`;
