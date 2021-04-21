import * as React from 'react';
import DarkMode from './DarkMode';

export default ({ children }) => {
    return (
        <>
            <DarkMode />
            {children}
        </>
    );
};
