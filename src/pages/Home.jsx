import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.subtitle}>
          This is the documentation hub. Browse the guide or submit a job request below.
        </p>
        <div className={styles.actions}>
          <Link to="/guide" className={styles.btnPrimary}>
            Read the Guide
          </Link>
          <Link to="/submit-job" className={styles.btnSecondary}>
            Submit a Job
          </Link>
        </div>
      </div>
    </main>
  )
}
