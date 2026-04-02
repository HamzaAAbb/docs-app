# Getting Started

Welcome to the **Documentation Guide**. This page walks you through everything you need to know to get up and running.

---

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [API Reference](#api-reference)

---

## Installation

Install the package using your preferred package manager:

```bash
npm install my-awesome-lib
# or
yarn add my-awesome-lib
```

Make sure you have **Node.js ≥ 18** installed before proceeding.

---

## Configuration

Create a config file at the root of your project:

```js
// my-lib.config.js
export default {
  apiKey: process.env.API_KEY,
  baseUrl: "https://api.example.com",
  timeout: 5000,
};
```

> **Note:** Never commit your `API_KEY` to version control.

---

## Usage Examples

### Basic Usage

```js
import { createClient } from "my-awesome-lib";

const client = createClient({ apiKey: "your-api-key" });
const result = await client.fetch("/users");
console.log(result.data);
```

---

## API Reference

### `createClient(config)`

| Parameter | Type     | Required | Description               |
|-----------|----------|----------|---------------------------|
| `apiKey`  | `string` | ✅        | Your API key              |
| `baseUrl` | `string` | ❌        | Override the default URL  |
| `timeout` | `number` | ❌        | Timeout in ms (default 5000) |
