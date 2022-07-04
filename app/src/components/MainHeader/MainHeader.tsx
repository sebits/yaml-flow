import React from 'react'
import Link from 'next/link'

import Button from '../Buttons/Button'
import styles from './MainHeader.module.css'
import DarkModeToggleButton from '../Buttons/ThemeToggleButton'

export default function MainHeader() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>YAML<strong>flow</strong></div>
      <ul className={styles.navList}>
        <li>Demo</li>
        <li>About</li>
        <li>Contact</li>
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
