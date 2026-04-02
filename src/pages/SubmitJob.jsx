import { useState } from 'react'
import styles from './SubmitJob.module.css'

export default function SubmitJob() {
  const [form, setForm] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className={styles.page}>
        <div className={styles.card}>
          <p className={styles.successIcon}>✅</p>
          <h2 className={styles.successTitle}>Job submitted!</h2>
          <p className={styles.successText}>
            Thanks, <strong>{form.name}</strong>. We'll be in touch at{' '}
            <strong>{form.email}</strong>.
          </p>
          <button
            className={styles.btn}
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '' }) }}
          >
            Submit another
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Submit a Job</h1>
        <p className={styles.subtitle}>Fill in the form below and we'll get back to you.</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </main>
  )
}
