const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Wrold");
  console.log("Hello World!");
});

app.listen(port, () => {
  console.log("Server is live on http://localhost:${port}");
});
