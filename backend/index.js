import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend static files
app.use(express.static(path.resolve("../frontend/dist")));

// API endpoint example: Ask Jarvis
app.post("/api/ask", express.json(), (req, res) => {
  const { prompt } = req.body;
  // TODO: replace with actual AI call
  res.json({ result: `You asked: ${prompt}` });
});

// API endpoint example: Get news
app.get("/api/news", (req, res) => {
  // TODO: replace with real news fetching logic
  res.json({
    articles: [
      { title: "News headline 1" },
      { title: "News headline 2" },
      { title: "News headline 3" },
    ],
  });
});

// Serve React app for any other route (client-side routing)
app.get("*", (req, res) => {
  res.sendFile(path.resolve("../frontend/dist/index.html"));
});

// Start backend server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
