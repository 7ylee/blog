import React from 'react';
import Link from 'next/link';
import fs from 'fs';

const Home = ({ slugs }) => (
    <div>
        <h1>SSG</h1>
        <ul>
            {slugs.map(slug => {
                return (
                    <li key={slug}>
                        <Link href={slug}>{slug}</Link>
                    </li>
                );
            })}
        </ul>
    </div>
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
