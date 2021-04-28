import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import GlobalStyle from '../components/styled/GlobalStyle';
import useDarkMode from '../components/Theme/useDarkMode';
import Button from '../components/styled/Button';
import Layout from '../components/Layout';

import '../node_modules/github-markdown-css/github-markdown.css';

const config = require('../next.config');

const Footer = styled.footer`
    padding: 20px 0 50px;

    font-size: 0.9em;
    color: 'var(--text-quaternary)';
`;
const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
        background-color: transparent;
        border-width: 0;
        font-size: 1.2em;
        padding: 0 4px;
    }
`;

function App({ Component, pageProps }) {
    const { toggle, system, darkMode } = useDarkMode(false);

    return (
        <>
            <Head>
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😎</text></svg>"
                />
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
                <Header>
                    <h1>
                        <Link href="/">🏠</Link>
                    </h1>
                    <div>
                        <Button type="button" onClick={system} title="system">
                            👨‍💻
                        </Button>
                        <Button type="button" onClick={toggle}>
                            {`${darkMode ? '🌙' : '☀️'}`}
                        </Button>
                    </div>
                </Header>

                <Component {...pageProps} />

                <Footer>
                    <a target="blank" href="https://github.com/7ylee">
                        7ylee@github
                    </a>
                </Footer>
            </Layout>
        </>
    );
}

export default App;
