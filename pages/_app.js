import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import GlobalStyle from '../components/styled/GlobalStyle';
import useDarkMode from '../components/Theme/useDarkMode';
import Button from '../components/styled/Button';
import Layout from '../components/Layout';

import '../node_modules/github-markdown-css/github-markdown.css';

const config = require('../next.config');

function App({ Component, pageProps }) {
    const { toggle, system, darkMode } = useDarkMode(false);

    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href={`${config.basePath}/prism-default.css`}
                    as="script"
                />
                <link
                    rel="preload"
                    href={`${config.basePath}/prism-tomorrow.css`}
                    as="script"
                />
                <link
                    href={`${config.basePath}/prism-${
                        darkMode ? 'tomorrow' : 'default'
                    }.css`}
                    rel="stylesheet"
                />
            </Head>
            <GlobalStyle />
            <Layout>
                <header>
                    <h1>
                        <Link href="/">🤔</Link>
                    </h1>
                    <Button primary type="button" onClick={toggle}>
                        toggle
                    </Button>
                    <Button type="button" onClick={system}>
                        system
                    </Button>
                </header>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;
