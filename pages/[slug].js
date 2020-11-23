import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';

const Article = ({ slug, html, frontmatter }) => {
    return (
        <>
            <Head>
                <title>{frontmatter.title}</title>
                <meta title="description" content={frontmatter.desc} />
            </Head>
            <article dangerouslySetInnerHTML={{ __html: html }} />
        </>
    );
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync('posts');
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs
        .readFileSync(path.join('posts', `${slug}.md`))
        .toString();
    const parsedMarkdown = matter(markdownWithMeta);
    const htmlString = marked(parsedMarkdown.content);

    return {
        props: {
            slug,
            html: htmlString,
            frontmatter: parsedMarkdown.data
        }
    };
};

export default Article;
