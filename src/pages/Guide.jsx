import MarkdownRenderer from '../components/MarkdownRenderer'
import TableOfContents from '../components/TableOfContents'
import defaultContent from '../docs/guide.md?raw'
import styles from './Guide.module.css'

export default function Guide() {
  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <TableOfContents content={defaultContent} />
      </aside>
      <div className={styles.content}>
        <MarkdownRenderer content={defaultContent} />
      </div>
    </main>
  )
}
