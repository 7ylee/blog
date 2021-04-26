import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import {
    FallbackStyles,
    InjectCssVars
} from '../components/Theme/InlineCssVariables';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <FallbackStyles />
                </Head>
                <body>
                    <InjectCssVars />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
