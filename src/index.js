const express = require("express");
const app = express();
const db = require("./dbconnect.js");
const port = 3000;

const start = async () => {
  await db.connect();
  app.get("/", (req, res) => {
    res.send("Hello Wrold");
    console.log("Hello World!");
  });

  app.listen(port, () => {
    console.log("Server is live on http://localhost:${port}");
  });
};

start();
