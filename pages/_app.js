import React from 'react';
import { ThemeProvider } from 'styled-components';
import CommonStyles from '../styled/CommonStyles';
import useDarkmode from '../hooks/useDarkmode';

import '../node_modules/github-markdown-css/github-markdown.css';

function App({ Component, pageProps }) {
    const { theme, toggleTheme } = useDarkmode();

    return (
        <ThemeProvider theme={theme}>
            <CommonStyles />
            <header>
                <h1>🙈🙉🙊</h1>
                <button type="button" onClick={toggleTheme}>
                    toggle
                </button>
            </header>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
