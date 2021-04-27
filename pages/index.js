import React from 'react';
import Link from 'next/link';
import fs from 'fs';

const Home = ({ slugs }) => (
    <ul>
        {slugs.map(slug => {
            return (
                <li key={slug}>
                    <Link href={`/${slug}`}>{slug}</Link>
                </li>
            );
        })}
    </ul>
);

export const getStaticProps = async () => {
    const files = fs.readdirSync('posts');
    return {
        props: {
            slugs: files.map(filename => filename.replace('.md', ''))
        }
    };
};

export default Home;
