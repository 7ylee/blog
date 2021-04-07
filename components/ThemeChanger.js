import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div>
            The current theme is: {theme}
            <button type="button" onClick={() => setTheme('light')}>
                Light Mode
            </button>
            <button type="button" onClick={() => setTheme('dark')}>
                Dark Mode
            </button>
        </div>
    );
};

export default ThemeChanger;
