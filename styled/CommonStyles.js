import { createGlobalStyle } from 'styled-components';

const CommonStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}


html {
  background: #fff; /* ie fallback */
  background: var(--bg-primary);
}

body {
  color: #000; /* ie fallback */
  color: var(--text-primary);
}
`;

export default CommonStyles;
