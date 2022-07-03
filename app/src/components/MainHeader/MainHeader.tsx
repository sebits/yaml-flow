import React from 'react'

import Button from '../Buttons/Button'
import styles from './MainHeader.module.css'

export default function MainHeader() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>YAML<strong>flow</strong></div>
      <ul className={styles.navList}>
        <li>Demo</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Button text={'Sign Up'} type={'secondary'} />
    </nav>
  )
}
