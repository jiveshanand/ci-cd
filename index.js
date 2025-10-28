const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🎉 CI/CD Demo: Hello from GitHub Actions!");
});

console.log("Starting server...");
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
