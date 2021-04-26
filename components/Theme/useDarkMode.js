import { useState, useEffect } from 'react';
import { setColorsByTheme } from './InlineCssVariables';

const STORAGEKEY = 'darkMode';

const currentColorMode = () => {
    // system color mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    let colorMode = prefersDarkFromMQ ? 'dark' : 'light';

    // user color mode preference
    const userDarkMode = window.localStorage.getItem(STORAGEKEY);
    if (userDarkMode) colorMode = userDarkMode === 'true' ? 'dark' : 'light';

    return colorMode;
};

const useDarkMode = initialState => {
    const [darkMode, setDarkmode] = useState(initialState);

    useEffect(() => {
        setColorsByTheme(true);
    }, [darkMode]);

    const toggle = () => {
        const colorMode = currentColorMode();
        let isDarkMode;

        if (colorMode === 'dark') {
            isDarkMode = 'false';
        } else {
            isDarkMode = 'true';
        }

        window.localStorage.setItem(STORAGEKEY, isDarkMode);
        setDarkmode(isDarkMode);
    };

    const system = () => {
        window.localStorage.removeItem(STORAGEKEY);
        const colorMode = currentColorMode();
        setDarkmode(colorMode);
    };

    return {
        toggle,
        system
    };
};

export default useDarkMode;
