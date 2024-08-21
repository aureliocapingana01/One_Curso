import { createGlobalStyle } from "styled-components";
import { theme } from "./Themes";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    color: ${theme.color.preto};
    font-family: ${theme.fonts.font};
    /* font-size: 16px; */
  }
`;
