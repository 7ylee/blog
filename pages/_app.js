import React from 'react';
import { ThemeProvider } from 'next-themes';
import CommonStyles from '../styled/CommonStyles';
// import useDarkmode from '../hooks/useDarkmode';
import Layout from '../components/Layout';

import '../node_modules/github-markdown-css/github-markdown.css';

function App({ Component, pageProps }) {
    // const { theme, toggleTheme } = useDarkmode();

    return (
        <ThemeProvider>
            <CommonStyles />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
