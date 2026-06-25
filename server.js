const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// =======================
// TEST API
// =======================
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// =======================
// HEALTH CHECK API
// =======================
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is healthy 🚀",
    time: new Date()
  });
});

// =======================
// START SERVER
// =======================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});