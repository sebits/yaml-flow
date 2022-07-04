import { useState, useEffect } from 'react'
import classNames from 'classnames';

import { applyThemePreference } from '../../utils/theme';
import { THEME_TYPES } from '../../constants';
import styles from './ThemeToggleButton.module.css'

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
            applyThemePreference(existingPreference);
            setTheme(existingPreference);
        } else {
            if (localStorage.theme === THEME_TYPES.THEME_DARK
                || (!('theme' in localStorage)
                    && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add(THEME_TYPES.THEME_DARK);
                setTheme(THEME_TYPES.THEME_DARK);
                applyThemePreference(THEME_TYPES.THEME_DARK);
            } else {
                document.documentElement.classList.remove(THEME_TYPES.THEME_DARK);
                setTheme(THEME_TYPES.THEME_LIGHT);
                applyThemePreference(THEME_TYPES.THEME_LIGHT);
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
        <button
            className={classNames(styles.button, theme === THEME_TYPES.THEME_DARK ? styles.dark : styles.light)}
            onClick={handleClick}>
            Toggle Dark Mode
        </button>
    )
}

export default DarkModeToggleButton;
