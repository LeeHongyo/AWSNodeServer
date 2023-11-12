const express = require("express");

const app = express();

const port = 3000;

app.set("port", port);

app.get("/", (req, res) => {
  res.send("This is Test!!");
});

app.listen(port, () => console.log("Listening on", port));

module.exports = app;
