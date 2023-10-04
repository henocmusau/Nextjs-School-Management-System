import { useState, useEffect } from 'react'

export default function useTheme({ initialTheme }) {

    const [theme, setTheme] = useState(initialTheme);

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

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

    return [
        theme, toggleTheme
    ]
}
