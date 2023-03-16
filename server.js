const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.get("/Contact", (req, res) => {
  res.sendFile("Contact.html", { root: "public" });
});

app.get("/Art", (req, res) => {
  res.sendFile("Art.html", { root: "public" });
});

app.get("/Comics", (req, res) => {
  res.sendFile("Comics.html", { root: "public" });
});

app.get("/About", (req, res) => {
  res.sendFile("About.html", { root: "public" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
