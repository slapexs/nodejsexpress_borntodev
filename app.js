const express = require("express");
const app = express();
const morgan = require("morgan");

const port = 3000;
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
