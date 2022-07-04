import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'

import { applyThemePreference } from '../../utils/theme';
import { THEME_TYPES } from '../../constants';

const DarkModeToggleButton = () => {
    /**
     * The state of the dark mode toggle button.
     * @type {string}
     * @default {THEME_TYPES.THEME_DARK}
     */
    const [theme, setTheme] = useState(THEME_TYPES.THEME_DARK);

    useEffect(() => {
        const existingPreference = localStorage.getItem("theme");
        if (existingPreference) {
            setTheme(existingPreference);
        } else {
            if (localStorage.theme === THEME_TYPES.THEME_DARK
                || (!('theme' in localStorage)
                    && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add(THEME_TYPES.THEME_DARK);
                setTheme(THEME_TYPES.THEME_DARK);
            } else {
                document.documentElement.classList.remove(THEME_TYPES.THEME_DARK);
                setTheme(THEME_TYPES.THEME_LIGHT);
            }
        }
    }, []);

    const handleClick = () => {
        const newTheme = theme === THEME_TYPES.THEME_LIGHT ? THEME_TYPES.THEME_DARK : THEME_TYPES.THEME_LIGHT;
        applyThemePreference(newTheme);
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    }

    return (
        theme === THEME_TYPES.THEME_LIGHT ? (
            <SunIcon className='w-10 h-10 p-2 hover:cursor-pointer' onClick={handleClick} />
        ) : (
            <MoonIcon className='w-10 h-10 p-2 hover:cursor-pointer' onClick={handleClick} />
        )
    )
}

export default DarkModeToggleButton;
