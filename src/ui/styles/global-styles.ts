import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
html {
  // Line height no longer need to be normalized to opinionated values clashing
  // with our fonts since all common browser now have sane defaults so we
  // revert the normalization process intentionally.
  line-height: normal;
}

// Box sizing reset
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
