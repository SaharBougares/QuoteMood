const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

let cache = [];
let lastFetch = 0;

async function refreshCache() {
  const now = Date.now();
  if (cache.length && now - lastFetch < 1000 * 60 * 30) return; // 30 min
  const { data } = await axios.get("https://zenquotes.io/api/quotes");
  cache = Array.isArray(data) ? data : [];
  lastFetch = now;
}

const keywordsByMood = {
  motivation: ["success", "dream", "goal", "believe", "courage"],
  stress: ["calm", "peace", "patience", "breathe", "healing"],
  focus: ["focus", "discipline", "habit", "practice", "learn"],
};

app.get("/health", (req, res) => res.json({ ok: true }));

app.get("/api/quote", async (req, res) => {
  try {
    await refreshCache();
    const mood = String(req.query.mood || "motivation");
    const keys = keywordsByMood[mood] || keywordsByMood.motivation;

    const list = cache.map(x => ({ text: x.q, author: x.a, mood }));
    const filtered = list.filter(q =>
      keys.some(k => (q.text || "").toLowerCase().includes(k))
    );

    const pickFrom = filtered.length ? filtered : list;
    res.json(pickFrom[Math.floor(Math.random() * pickFrom.length)]);
  } catch {
    res.status(500).json({ message: "Backend error" });
  }
});

app.listen(3000, () => console.log("✅ Backend http://localhost:3000"));
