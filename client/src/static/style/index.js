import { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';

export const palette = {


};

export const zIndex = {
  base: 1,
  topButton: 30,
  header: 50,
  fullScreen: 100,
  mouseTrail: 200,
  loading: 1000,
  light: 2000,
  menu: 3000,
};

export const theme = {
  palette,
  zIndex,
};

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    
    ${media.lessThan('medium')`
       font-size: 12px;
    `};
  }

  body {
    margin: 0;
    // TODO: 웹폰트가 아닌 font-face 로 변경
    // font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-family: 'IBM Plex Sans KR', 'sans-serif';
    user-select: none;
    
    & ::selection {
      background-color: ${palette.PINK_PASTEL};
      color: white;
    }
    
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    & ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }

    overscroll-behavior-y: none;
  }
  
  input, textarea, button {
    font-family: inherit;
  }
`;
