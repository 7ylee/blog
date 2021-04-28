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
            }
            body {
                color: #000; /* ie fallback */
                color: var(--text-primary);
            }
            code {
                font-size: 0.8em !important;
                line-height: 0.8 !important;
            }
        `}
    />
);

export default GlobalStyle;
