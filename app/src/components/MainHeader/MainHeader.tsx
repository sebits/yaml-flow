import React from 'react'
import styles from './main-header.module.css'

export default function MainHeader() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>LOGO</div>
      <ul className={styles.navList}>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
      </ul>
    </nav>
  )
}
