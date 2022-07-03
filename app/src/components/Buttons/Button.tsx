import React from 'react'
import classNames from 'classnames';

import styles from './Button.module.css'

interface Props {
    /**
     * The text of the button
     * @type {string}
     */
    text: String,
    /**
     * The type of the button
     * @type {string}
     * @default 'primary'
     */
    type?: 'primary' | 'secondary'
}

const Button = ({ text, type = 'primary' }: Props): React.ReactElement => {
    const buttonType = type === 'primary' ? styles.primary : styles.secondary;
    return (
        <button className={classNames(styles.button, buttonType)}>{text}</button>
    )
}

export default Button