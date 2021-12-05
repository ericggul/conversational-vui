import { css } from 'styled-components';
import media from 'styled-media-query';

const getRandom = (a, b) => Math.random() * (b - a) + a;

export const FlexCenterStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterImageStyle = css`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const RandomSetStyle = css`
  position: absolute;
  top: ${({ theme }) => getRandom(0, theme.windowWidth * 1)}px;
  left: ${({ theme }) => getRandom(0, theme.windowHeight * 1)}px;
`;

export const ResponsiveWidthStyle = css`
  ${media.greaterThan('large')`
    width: ${props => props.widths[0]}px;
  `};
  ${media.between('medium', 'large')`
    width: ${props => props.widths[1]}px;
  `};
  ${media.lessThan('medium')`
    width: ${props => props.widths[2]}px;
  `};
`;

export const ResponsiveHeightStyle = css`
  ${media.greaterThan('large')`
    height: ${props => props.heights[0]}px;
  `};
  ${media.between('medium', 'large')`
    height: ${props => props.heights[1]}px;
  `};
  ${media.lessThan('medium')`
    height: ${props => props.heights[2]}px;
  `};
`;

export const ResponsiveWidthStyleTwo = css`
  ${media.greaterThan('large')`
    width: ${props => props.widths[0]}px;
  `};
  ${media.lessThan('medium')`
    width: ${props => props.widths[2]}px;
  `};
  ${media.between('medium', 'large')`
    width: ${props => props.widths[1]}px;
  `};
`;

export const ResponsiveHeightStyleTwo = css`
  ${media.greaterThan('large')`
    height: ${props => props.heights[0]}px;
  `};
  ${media.lessThan('medium')`
    height: ${props => props.heights[2]}px;
  `};
  ${media.between('medium', 'large')`
    height: ${props => props.heights[1]}px;
  `};
`;
