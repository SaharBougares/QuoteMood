# QuoteMood

QuoteMood is a full‑stack app that generates inspirational quotes based on your current mood and lets you save your favorites.

## Features

- **Mood-based quotes** (Motivation, Stress, Focus)
- **Random quote generator**
- **Favorites page**
- **Node/Express API** with a lightweight cache

## Tech Stack

- **Frontend:** Angular (standalone components)
- **Backend:** Node.js, Express
- **HTTP:** Angular `HttpClient`, `axios`

## Local Setup

### Prerequisites

- Node.js (LTS recommended)
- npm

### 1) Start the backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

- `http://localhost:3000`

Health check:

- `http://localhost:3000/health`

### 2) Start the frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

- `http://localhost:4200`

The frontend uses a dev proxy so that `/api/*` is forwarded to the backend.

## API

- `GET /api/quote?mood=motivation|stress|focus`

Example:

```bash
curl "http://localhost:3000/api/quote?mood=motivation"
```

## Project Structure

```text
QuoteMood/
  backend/
  frontend/
```

## Screenshots

Add screenshots in a folder like `docs/` and reference them here.

## Notes

- Quotes are fetched from `https://zenquotes.io/api/quotes` and cached for 30 minutes.

## License

MIT
