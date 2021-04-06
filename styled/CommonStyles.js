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


body  {
  background: ${props => props.theme.bg};
  color: ${props => props.theme.txt};
}
`;

export default CommonStyles;