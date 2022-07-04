import React from 'react'
import Link from 'next/link'

import Button from '../Buttons/Button'
import DarkModeToggleButton from '../Buttons/ThemeToggleButton'

export default function MainHeader() {
  return (
    <nav className="sticky top-0 flex items-center justify-between h-20 px-5 bg-gray-200 lg:px-8 md:px-6 dark:bg-gray-900">
      <div className="text-2xl tracking-normal font-clash-display">
        YAML<strong>flow</strong>
      </div>
      <ul className="flex items-center justify-between">
        <li className="p-2 mr-4">
          <Link href="/demo">
            Demo
          </Link>
        </li>
        <li className="p-2 mr-4">
          <Link href="/about">
            About
          </Link>
        </li>
        <li className="p-2">
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <span className="flex flex-row items-center space-x-5 divider-x divider-white">
        <DarkModeToggleButton />
        <Link href="/login">
          <a className="p-2">Login</a>
        </Link>
        <Button text={'Sign Up'} type={'secondary'} />
      </span>
    </nav>
  )
}
