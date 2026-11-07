const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "EASYRIQUE",
    message: "Bienvenue sur le serveur EASYRIQUE.",
    status: "online",
    version: "1.0.0"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    success: true,
    message: "Le serveur EASYRIQUE fonctionne correctement."
  });
});

app.listen(PORT, () => {
  console.log(`EASYRIQUE server running on port ${PORT}`);
});
