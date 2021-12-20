import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    font-size: 0.875rem;
  }
  h2 {
    font-size: 1.75em;
    color: ${(props) => props.theme.colors.main}
  }
`;

export default GlobalStyle;
