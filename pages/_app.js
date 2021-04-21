import React from 'react';
import useDarkMode from 'use-dark-mode';
import CommonStyles from '../styled/CommonStyles';
import Providers from '../components/Providers';
import '../node_modules/github-markdown-css/github-markdown.css';

function App({ Component, pageProps }) {
    return (
        <Providers>
            <CommonStyles />
            <header>
                <h1>🙈🙉🙊</h1>
            </header>
            <Component {...pageProps} />
        </Providers>
    );
}

export default App;
