import { useState, useEffect, useDebugValue } from 'react';
import { useCookies } from 'react-cookie';
import { dark, light } from '../styled/Themes';
import config from '../next.config';

const COOKIE_KEY = 'theme';

const useDarkmode = () => {
    const [theme, setTheme] = useState(light); // light by default
    const [cookie, setCookie] = useCookies([COOKIE_KEY]);

    const userTheme = () => {
        // if theres cookie
        if (cookie.theme) return cookie.theme === 'light' ? light : dark;

        // browser theme config

        // OS theme config

        // default
        return light;
    };

    const toggleTheme = () => {
        let cookieValue;

        if (cookie.theme === undefined) {
            // 시스템 따라 설정됬을시 디폴트가 light 가 아닐수 있음
            cookieValue = userTheme() === dark ? 'light' : 'dark';
            setTheme(userTheme() === dark ? light : dark);
        } else if (cookie.theme === 'light') {
            cookieValue = 'dark';
            setTheme(dark);
        } else {
            cookieValue = 'light';
            setTheme(light);
        }

        setCookie('theme', cookieValue, {
            path: config.basePath,
            maxAge: 3600, // Expires after 1hr
            sameSite: true
        });
    };

    useEffect(() => {
        setTheme(userTheme());
    }, []);

    useDebugValue(theme);

    return { theme, toggleTheme };
};

export default useDarkmode;
