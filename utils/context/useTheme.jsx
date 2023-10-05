
import { useState, useEffect } from 'react'

export default function useTheme({ getInitialTheme, initialTheme }) {

    const [theme, setTheme] = useState(getInitialTheme);
    console.log(initialTheme)

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('color-theme', rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }
    const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);


    return [
        theme, toggleTheme
    ]
}
