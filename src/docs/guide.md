# Complete Feature Guide

> This document tests every markdown feature supported by the docs app.
> Browse the table of contents on the left to jump between sections.

---

## Table of Contents

- [Typography](#typography)
- [Code Blocks](#code-blocks)
- [Tables](#tables)
- [Lists](#lists)
- [Blockquotes](#blockquotes)
- [Images](#images)
- [Links](#links)
- [API Reference](#api-reference)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)

---

## Typography

### Headings

This section uses `h3` — it should be indented in the table of contents under **Typography**.

#### H4 Example

H4 and below are not shown in the ToC but still render in the document.

##### H5 Example

Getting smaller.

### Inline Formatting

You can write **bold text**, *italic text*, or ***bold and italic*** together.

Inline `code snippets` render with a highlighted background.

~~Strikethrough text~~ is supported via GFM.

Here is a [link to the Configuration section](#configuration) and an [external link](https://github.com).

---

## Code Blocks

### JavaScript

```js
// Async fetch with error handling
async function fetchUser(id) {
  try {
    const res = await fetch(`/api/users/${id}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return data
  } catch (err) {
    console.error("Failed to fetch user:", err)
    return null
  }
}
```

### Python

```python
# Simple class with type hints
from dataclasses import dataclass
from typing import Optional

@dataclass
class User:
    id: int
    name: str
    email: str
    role: Optional[str] = "viewer"

    def is_admin(self) -> bool:
        return self.role == "admin"

users = [User(1, "Alice", "alice@example.com", "admin")]
admins = [u for u in users if u.is_admin()]
```

### Bash

```bash
# Install, build, and deploy
npm install
npm run build

# Copy build output to server
rsync -avz dist/ user@server:/var/www/html/

# Restart the web server
ssh user@server "sudo systemctl restart nginx"
```

### TypeScript

```ts
interface ApiConfig {
  baseUrl: string
  apiKey: string
  timeout?: number
  retries?: number
}

async function createClient(config: ApiConfig) {
  const { baseUrl, apiKey, timeout = 5000, retries = 3 } = config

  return {
    get: async <T>(path: string): Promise<T> => {
      const res = await fetch(`${baseUrl}${path}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
        signal: AbortSignal.timeout(timeout),
      })
      return res.json() as Promise<T>
    },
  }
}
```

### JSON

```json
{
  "name": "my-docs",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "react-markdown": "^9.0.1"
  }
}
```

---

## Tables

### Simple Table

| Name     | Type     | Default | Description                   |
|----------|----------|---------|-------------------------------|
| `apiKey` | `string` | —       | Required. Your API key.       |
| `baseUrl`| `string` | `/api`  | Base URL for all requests.    |
| `timeout`| `number` | `5000`  | Request timeout in ms.        |
| `retries`| `number` | `3`     | Number of retry attempts.     |
| `debug`  | `boolean`| `false` | Enable verbose logging.       |

### Status Codes

| Code | Status                | Description                              |
|------|-----------------------|------------------------------------------|
| 200  | OK                    | Request succeeded.                       |
| 201  | Created               | Resource created successfully.           |
| 400  | Bad Request           | Malformed request or missing parameters. |
| 401  | Unauthorized          | Invalid or missing API key.              |
| 403  | Forbidden             | Valid key but insufficient permissions.  |
| 404  | Not Found             | Resource does not exist.                 |
| 429  | Too Many Requests     | Rate limit exceeded.                     |
| 500  | Internal Server Error | Unexpected server-side failure.          |

---

## Lists

### Unordered List

- First item at the top level
- Second item at the top level
- Third item with sub-items
  - Nested item one
  - Nested item two
  - Nested item three
- Fourth item back at top level

### Ordered List

1. Clone the repository
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env` and fill in your values
4. Run `npm run dev` to start the development server
5. Open `http://localhost:5173` in your browser

### Task List (GFM)

- [x] Set up the project structure
- [x] Add React Router
- [x] Build the Navbar component
- [x] Implement dark mode toggle
- [x] Add markdown rendering
- [ ] Write unit tests
- [ ] Add search functionality
- [ ] Deploy to production

---

## Blockquotes

A simple blockquote:

> The best documentation is the one developers actually read.

A multi-line blockquote:

> **Warning:** This action is irreversible.
> Once you delete a resource, all associated data will be permanently removed.
> Make sure you have a backup before proceeding.

A nested blockquote:

> Outer quote — top-level context.
>
> > Inner quote — a reply or nested note.

---

## Images

Images below use **placeholder URLs** so no files are needed locally.
Swap the `src` for your own images whenever you like.

### With Alt Text

![A placeholder image showing a grey rectangle](https://placehold.co/800x400?text=Banner+Image)

### Smaller Image

![Small placeholder](https://placehold.co/400x200?text=Feature+Screenshot)

### With a local image

![alt text](/images/phone-logo.png)

### With a local image while modifying the width

<img src="/images/phone-logo.png" alt="alt text" style="width: 35%; display: block; margin: 0 auto;" />

### Side-by-side images (via HTML in md)

<img src="https://placehold.co/360x200?text=Before" alt="Before" width="48%" />
<img src="https://placehold.co/360x200?text=After" alt="After" width="48%" style="margin-left:2%" />

> **Tip for real projects:** Put your images in `public/images/` and reference them as
> `![alt text](/images/my-image.png)`. Vite serves the `public/` folder at the root.

---

## Links

### Internal anchor links

- Jump to [Code Blocks](#code-blocks)
- Jump to [API Reference](#api-reference)
- Jump to [Troubleshooting](#troubleshooting)

### External links

- [React documentation](https://react.dev)
- [react-markdown on npm](https://www.npmjs.com/package/react-markdown)
- [Vite documentation](https://vitejs.dev)
- [Remark GFM plugin](https://github.com/remarkjs/remark-gfm)

---

## API Reference

### `GET /users`

Returns a paginated list of users.

**Query parameters**

| Parameter | Type     | Required | Description                        |
|-----------|----------|----------|------------------------------------|
| `page`    | `number` | ❌        | Page number, default `1`.          |
| `limit`   | `number` | ❌        | Items per page, default `20`.      |
| `role`    | `string` | ❌        | Filter by role: `admin`, `viewer`. |

**Example request**

```bash
curl -X GET "https://api.example.com/users?page=1&limit=10" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Example response**

```json
{
  "data": [
    { "id": 1, "name": "Alice", "email": "alice@example.com", "role": "admin" },
    { "id": 2, "name": "Bob",   "email": "bob@example.com",   "role": "viewer" }
  ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 2
  }
}
```

### `POST /users`

Creates a new user.

**Request body**

```json
{
  "name": "Carol",
  "email": "carol@example.com",
  "role": "viewer"
}
```

**Response**

```json
{ "id": 3, "name": "Carol", "email": "carol@example.com", "role": "viewer" }
```

### `DELETE /users/:id`

Permanently deletes a user.

> **Warning:** This cannot be undone.

```bash
curl -X DELETE "https://api.example.com/users/3" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Configuration

### Environment Variables

Create a `.env` file at the project root:

```bash
VITE_API_URL=https://api.example.com
VITE_API_KEY=your-secret-key
VITE_DEBUG=false
```

> Never commit `.env` to version control. Add it to `.gitignore`.

### Vite Config

```js
// vite.config.js
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
})
```

### Theme Tokens

All colors are CSS custom properties. Override them in `index.css`:

```css
:root {
  --accent: #7c3aed;       /* purple instead of blue */
  --bg: #fafafa;
  --surface: #ffffff;
  --border: #e5e7eb;
}

[data-theme="dark"] {
  --accent: #a78bfa;
  --bg: #111827;
  --surface: #1f2937;
  --border: #374151;
}
```

---

## Troubleshooting

### Blank page after `npm run dev`

Check that `src/index.jsx` mounts to `#root` and that `index.html` has `<div id="root"></div>`.

```bash
# Verify the dev server is running
curl http://localhost:5173
```

### Markdown not rendering

Make sure you imported `remark-gfm` and passed it to `ReactMarkdown`:

```jsx
import remarkGfm from "remark-gfm"

<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
```

### Anchor links not scrolling

This happens when headings don't have `id` attributes. Check that `MarkdownRenderer` passes a custom `components` prop that calls `slugify()` on each heading. See the [slugify utility](#configuration) for details.

### Dark mode flicker on reload

Apply the theme class synchronously before React hydrates by adding a small script to `index.html`:

```html
<script>
  const dark = localStorage.getItem("theme") === "dark"
  if (dark) document.documentElement.setAttribute("data-theme", "dark")
</script>
```

### Images not loading

If using images from `public/`, reference them with an absolute path:

```md
![My image](/images/screenshot.png)
```

Not a relative path like `./images/screenshot.png`, which won't work after a build.

---

*End of guide. Jump back to [the top](#complete-feature-guide).*
