import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../components/styled/GlobalStyle';
import useDarkMode from '../components/Theme/useDarkMode';
import Button from '../components/styled/Button';
import '../node_modules/github-markdown-css/github-markdown.css';

function App({ Component, pageProps }) {
    const { toggle, system, darkMode } = useDarkMode(false);

    return (
        <>
            <Head>
                <link rel="preload" href="/prism-default.css" as="script" />
                <link rel="preload" href="/prism-okaidia.css" as="script" />
                <link
                    href={`/prism-${
                        darkMode === 'true' ? 'tomorrow' : 'default'
                    }.css`}
                    rel="stylesheet"
                />
            </Head>
            <GlobalStyle />
            <header>
                <h1>🙈🙉🙊</h1>
                <Button primary type="button" onClick={toggle}>
                    toggle
                </Button>
                <Button type="button" onClick={system}>
                    system
                </Button>
            </header>
            <Component {...pageProps} />
        </>
    );
}

export default App;
