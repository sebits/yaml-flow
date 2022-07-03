import React from 'react'
import styles from './Button.module.scss'

interface Props {
    text: String,
    type: 'primary' | 'secondary'
}

const Button = ({ text }: Props): React.ReactElement => {
    return (
        <button className={styles.button}>{text}</button>
    )
}

export default Button