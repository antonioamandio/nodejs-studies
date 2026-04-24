# nodejs-studies

A **Node.js** study repository with examples, experiments, and practical notes for continuous learning.

## 📌 Goal

This project was created to:

- practice Node.js fundamentals;
- explore backend JavaScript ecosystem features;
- document exercises and concept experiments;
- improve code organization best practices.

## 🛠️ Technologies

- Node.js
- JavaScript

## 📁 Project Structure

```bash
nodejs-studies/
├── db.json
├── LICENSE
├── package.json
├── src/                 # Source code
│   ├── middlewares/     # Intercepters
│   ├── ...
└── streams/             # Streams created
```

## ▶️ How to Run

### Prerequisites

- [Node.js](https://nodejs.org) installed (recommended: LTS version)
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Run the project

```bash
npm start
```

### Run in development mode (if configured)

```bash
npm run dev
```

## ✅ Useful Scripts

In `package.json`, you may have scripts like:

```json
{
    "scripts": {
        "start": "node src/index.js",
        "dev": "nodemon src/index.js"
    }
}
```

## 📚 Study Topics (example)

- [x] Stream JS
- [x] Modules (CommonJS / ES Modules)
- [x] File System (`fs`)
- [x] Native HTTP
- [x] HTTP Methods and Routes
- [x] Database
