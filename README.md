# TypeScript Refresh Playground

A small personal project for refreshing and revisiting modern **TypeScript**, **DOM interaction**, and **modular code structure** — built for fun, learning, and clean practice.

---

## Tech Stack

- TypeScript
- HTML + DOM manipulation (no frameworks)
- Native ES modules (`import/export`)
- Node.js for local server
- Zero bundlers / zero fluff

---

### PowerShell Permission (Windows only)

If you're using **PowerShell** and get an execution policy error, run:

```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass;
```

## Initialize the project
```bash
mkdir ts-mini-project
cd ts-mini-project
npm init -y
npm install typescript --save-dev
npx tsc --init
```

## Folder Structure
```bash
ts-mini-project/
├── public/
│   ├── index.html
│   └── app.js         ← compiled JS from TypeScript
├── src/
│   ├── app.ts         ← app entry point
│   ├── components/    ← reusable logic (buttonClick, logger, etc.)
│   └── sections/      ← feature-specific demo modules
├── server.js          ← basic HTTP server
├── tsconfig.json
├── package.json
```

## Live Preview Configuration
```bash
npm install --save-dev concurrently lite-server typescript
```

### bs-config.json
```bash
{
  "server": {
    "baseDir": ["./public"]
  }
}
```

### package.json
```bash
"scripts": {
  "build": "tsc",
  "dev": "concurrently \"tsc --watch\" \"lite-server\"",
  "start": "node server.js"
}
```

## Usage
```bash
npm run build      # Compile TypeScript (src → public)
npm run dev        # Watch TS files & auto-compile - Live Preview
npm start          # Start local server
Open in browser	   # http://localhost:3000
```