/*
This code comes from https://joshwcomeau.com/gatsby/dark-mode/
It uses the users' prefers-color-scheme media query to inline
CSS variables into the :root of the page before any content is
rendered.
*/
import React from 'react';
import COLORS from './colors';

export function setColorsByTheme(fromHook) {
    const colors = fromHook ? COLORS : '🌈';
    // system color mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    let colorMode = prefersDarkFromMQ ? 'dark' : 'light';

    // user color mode preference
    const userDarkMode = window.localStorage.getItem('darkMode');
    if (userDarkMode) colorMode = userDarkMode === 'true' ? 'dark' : 'light';

    // add or update css vars
    const root = document.documentElement;
    Object.entries(colors).forEach(([name, colorByTheme]) => {
        const cssVarName = `--${name}`;
        root.style.setProperty(cssVarName, colorByTheme[colorMode]);
    });

    // window event handler - for system change
    if (!window.localStorage.getItem('darkMode') && !fromHook) {
        window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
            colorMode = e.matches ? 'dark' : 'light';
            Object.entries(colors).forEach(([name, colorByTheme]) => {
                const cssVarName = `--${name}`;
                root.style.setProperty(cssVarName, colorByTheme[colorMode]);
            });
        });
    }
}

export function InjectCssVars() {
    const boundFn = String(setColorsByTheme).replace(
        "'🌈'",
        JSON.stringify(COLORS)
    );

    const calledFunction = `(${boundFn})()`;

    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
}

// if user doesn't have JavaScript enabled, set variables properly in a
// head style tag anyways (light mode)
export function FallbackStyles() {
    const cssVariableString = Object.entries(COLORS).reduce(
        (acc, [name, colorByTheme]) => {
            return `${acc}\n--color-${name}: ${colorByTheme.light};`;
        },
        ''
    );

    const wrappedInSelector = `html { ${cssVariableString} }`;

    return <style>{wrappedInSelector}</style>;
}
