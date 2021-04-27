// import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
    <Global
        styles={css`
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                    Helvetica Neue, sans-serif;
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
                transition: background-color 0.2s
                    cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            body {
                color: #000; /* ie fallback */
                color: var(--text-primary);
                transition: color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
        `}
    />
);

export default GlobalStyle;
