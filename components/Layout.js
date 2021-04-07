import React from 'react';
import ThemeChanger from './ThemeChanger';

const Layout = ({ children }) => {
    return (
        <main>
            <h1>😎</h1>
            <ThemeChanger />
            {children}
        </main>
    );
};

export default Layout;
