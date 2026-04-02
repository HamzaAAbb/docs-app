import { useEffect, useState } from 'react'
import { slugify } from '../utils/slugify'
import styles from './TableOfContents.module.css'

function extractHeadings(markdown) {
  const lines = markdown.split('\n')
  const headings = []

  for (const line of lines) {
    const match = line.match(/^(#{1,3})\s+(.+)/)
    if (match) {
      const level = match[1].length
      const text = match[2].trim()
      const id = slugify(text)
      headings.push({ level, text, id })
    }
  }

  return headings
}

export default function TableOfContents({ content }) {
  const headings = extractHeadings(content)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [content])

  if (headings.length === 0) return null

  return (
    <nav className={styles.toc}>
      <p className={styles.tocTitle}>On this page</p>
      <ul className={styles.list}>
        {headings.map((h) => (
          <li key={h.id} className={styles.item}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' })
                setActiveId(h.id)
              }}
              className={[
                styles.link,
                h.level === 2 ? styles.level2 : '',
                h.level === 3 ? styles.level3 : '',
                activeId === h.id ? styles.active : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
