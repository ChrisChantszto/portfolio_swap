const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "build")));

// All other requests, send them to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Frontend server listening on port ${port}`);
})