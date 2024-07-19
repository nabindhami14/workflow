const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO WORLD FROM THE SERVER!!");
});

app.listen(3000, () => console.log("SERVING"));
