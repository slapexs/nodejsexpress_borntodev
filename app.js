const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

const port = 3000;
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
