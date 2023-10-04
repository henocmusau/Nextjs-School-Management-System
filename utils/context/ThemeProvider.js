'use client'

import useTheme from '@/utils/context/useTheme';
import { createContext, useContext } from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

    return 'light' // light theme as the default;
};

const ThemeContext = createContext();

export function useThemeContext() {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [theme, toggleTheme] = useTheme(getInitialTheme)

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;