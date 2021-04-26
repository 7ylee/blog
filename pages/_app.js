import React from 'react';
import CommonStyles from '../components/styled/CommonStyles';
import useDarkMode from '../components/Theme/useDarkMode';

import '../node_modules/github-markdown-css/github-markdown.css';

function App({ Component, pageProps }) {
    const { toggle, system } = useDarkMode(false);

    return (
        <>
            <CommonStyles />
            <header>
                <h1>🙈🙉🙊</h1>
                <button type="button" onClick={toggle}>
                    toggle
                </button>
                <button type="button" onClick={system}>
                    system
                </button>
            </header>
            <Component {...pageProps} />
        </>
    );
}

export default App;
