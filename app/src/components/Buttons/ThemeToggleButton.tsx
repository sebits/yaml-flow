import { useState, useEffect } from 'react'
import classNames from 'classnames';

import { applyThemePreference } from '../../utils/theme';
import { THEME_TYPES } from '../../constants';
import styles from './ThemeToggleButton.module.css'

const DarkModeToggleButton = () => {
    /**
     * The state of the dark mode toggle button.
     * @type {string}
     * @default ''
     */
    const [theme, setTheme] = useState(THEME_TYPES.THEME_LIGHT);

    useEffect(() => {
        const existingPreference = localStorage.getItem("yamlflow-theme");
        if (existingPreference) {
            applyThemePreference(existingPreference);
            setTheme(existingPreference);
        } else {
            localStorage.setItem("yamlflow-theme", THEME_TYPES.THEME_LIGHT);
            setTheme(THEME_TYPES.THEME_LIGHT);
        }
    }, []);

    const handleClick = () => {
        const newTheme = theme === THEME_TYPES.THEME_LIGHT ? THEME_TYPES.THEME_DARK : THEME_TYPES.THEME_LIGHT;
        applyThemePreference(newTheme);
        localStorage.setItem('yamlflow-theme', newTheme);
        setTheme(newTheme);
    }

    return (
        <button
            className={classNames(styles.button)}
            onClick={handleClick}>
            Toggle Dark Mode
        </button>
    )
}

export default DarkModeToggleButton;
