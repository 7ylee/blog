import * as React from 'react';
import DarkMode from './Darkmode';

export default ({ children }) => {
    return (
        <>
            <DarkMode />
            {children}
        </>
    );
};
