let express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.send("ok");
});

app.get("/cor/:pessoa", (req, res) => {
  if (req.params.pessoa === "victor") {
    res.json({ cor: "vermelho" });
  } else {
    res.status(500);
    res.send("pessoa invália");
  }
});

module.exports = app;
