import React from 'react';
import useDarkMode from 'use-dark-mode';
import CommonStyles from '../styled/CommonStyles';
import Providers from '../components/Providers';
import '../node_modules/github-markdown-css/github-markdown.css';

function App({ Component, pageProps }) {
    const darkMode = useDarkMode();

    return (
        <Providers>
            <CommonStyles />
            <header>
                <h1>🙈🙉🙊</h1>
                <button type="button" onClick={darkMode.enable}>
                    dark
                </button>
                <button type="button" onClick={darkMode.disable}>
                    light
                </button>
            </header>
            <Component {...pageProps} />
        </Providers>
    );
}

export default App;
