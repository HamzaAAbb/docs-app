import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { slugify } from '../utils/slugify'
import styles from './MarkdownRenderer.module.css'

// For each heading level, render the correct tag with an explicit id
// so that ToC anchor links and internal #hash links both work.
function makeHeading(level) {
  const Tag = `h${level}`
  return function Heading({ children }) {
    const text = typeof children === 'string'
      ? children
      : Array.isArray(children)
        ? children.map(c => (typeof c === 'string' ? c : '')).join('')
        : ''
    const id = slugify(text)
    return <Tag id={id} style={{ scrollMarginTop: '80px' }}>{children}</Tag>
  }
}

const components = {
  h1: makeHeading(1),
  h2: makeHeading(2),
  h3: makeHeading(3),
  h4: makeHeading(4),
  h5: makeHeading(5),
  h6: makeHeading(6),
}

export default function MarkdownRenderer({ content }) {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}