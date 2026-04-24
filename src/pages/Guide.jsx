import MarkdownRenderer from '../components/MarkdownRenderer'
import TableOfContents from '../components/TableOfContents'
import defaultContent from '../docs/usage-guide.md?raw'
import styles from './Guide.module.css'

export default function Guide() {
  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <TableOfContents content={defaultContent} />
      </aside>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <MarkdownRenderer content={defaultContent} />
        </div>
      </div>
    </main>
  )
}