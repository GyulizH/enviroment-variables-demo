const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const who = process.env.WHO;

app.get("/", (req, res) => {
  res.send(`Hello ${who}!`);
});

app.listen(port, () => {
  console.log(`${who}:Example app listening on port ${port}`);
});
