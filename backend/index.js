import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// ES Module __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve frontend static files
app.use(express.static(path.resolve(__dirname, "../frontend/dist")));

// API endpoint: Ask Jarvis
app.post("/api/ask", express.json(), (req, res) => {
  const { prompt } = req.body;
  res.json({ result: `You asked: ${prompt}` }); // ← Use backticks
});

// API endpoint: Get news
app.get("/api/news", (req, res) => {
  res.json({
    articles: [
      { title: "News headline 1" },
      { title: "News headline 2" },
      { title: "News headline 3" },
    ],
  });
});

// Serve React app for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
