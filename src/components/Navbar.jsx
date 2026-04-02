import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar({ dark, onToggleTheme }) {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <span className={styles.logo}>📘</span>
        <span className={styles.brandName}>MyDocs</span>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/submit-job"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Submit a Job
        </NavLink>
        <NavLink
          to="/guide"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Guide
        </NavLink>
      </nav>

      <button
        className={styles.themeToggle}
        onClick={onToggleTheme}
        aria-label="Toggle light/dark mode"
        title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {dark ? '☀️' : '🌙'}
      </button>
    </header>
  )
}
