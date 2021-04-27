import React from 'react';
import Head from 'next/head';

import { getAllDocs, getDocBySlug } from '../lib/docs';
import markdownToHtml from '../lib/markdown';

const Article = ({ slug, content, meta }) => {
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.desc} />
            </Head>
            <article dangerouslySetInnerHTML={{ __html: content }} />
        </>
    );
};

export async function getStaticProps({ params }) {
    const doc = getDocBySlug(params.slug);
    const content = await markdownToHtml(doc.content || '');

    return {
        props: {
            ...doc,
            content
        }
    };
}

export async function getStaticPaths() {
    const docs = getAllDocs();

    return {
        paths: docs.map(doc => {
            return {
                params: {
                    slug: doc.slug
                }
            };
        }),
        fallback: false
    };
}

export default Article;
