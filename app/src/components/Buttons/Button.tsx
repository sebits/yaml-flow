import React from 'react'
import classNames from 'classnames';

interface ButtonProps {
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

const Button = ({ text, type = 'primary' }: ButtonProps): React.ReactElement => {
    const buttonType = type === 'primary'
        ? "text-white bg-indigo-600 dark:bg-indigo-700"
        : "bg-gray-100 shadow-sm ring-1 ring-gray-500 hover:ring-gray-600 dark:hover:ring-gray-400 backdrop-blur-3xl bg-opacity-10 hover:bg-opacity-20";
    return (
        <button
            className={classNames("p-2 px-4 rounded-md", buttonType)}>
            {text}
        </button>
    )
}

export default Button