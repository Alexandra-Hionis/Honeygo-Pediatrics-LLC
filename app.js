const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist"));
// app.use(express.static(__dirname + "/src/styles.css"));
// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
