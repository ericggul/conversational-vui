import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

export const palette = {
  // CHAT_BACKGROUND_GREEN: "#A7F4D4",
  // CHAT_PROGRESS_LIGHT_GREEN: "#F0FEF8",
  // CHAT_PROGRESS_DARK_GREEN: "#55DDA4",
  // CHAT_BACKGROUND_BLUE: "#A4DFF1",
  // CHAT_PROGRESS_LIGHT_BLUE: "#F1FCFF",
  // CHAT_PROGRESS_DARK_BLUE: "#5CC6EA",

  CHAT_BACKGROUND_GREEN: "#C0ECDA",
  CHAT_PROGRESS_LIGHT_GREEN: "#F0FEF8",
  CHAT_PROGRESS_DARK_GREEN: "#6CC8A1",
  CHAT_BACKGROUND_BLUE: "#C0E1EC",
  CHAT_PROGRESS_LIGHT_BLUE: "#F1FCFF",
  CHAT_PROGRESS_DARK_BLUE: "#71B3C9",
  GRAY_TEXT: "#888",

  RECORD_LIGHT_RED: "#ECC0C0",
  RECORD_DARK_RED: "#D93131",

  HEADER: "#4D4D4D",
  BACKGROUND: "#DDDDDD",
  BORDER: "#393939",
  RECORD_BUTTON: "#545454",
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
    
    ${media.lessThan("medium")`
       font-size: 12px;
    `};
  }

  body {
    margin: 0;
    // TODO: 웹폰트가 아닌 font-face 로 변경
    // font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-family: 'Helvetica', 'sans-serif';
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
