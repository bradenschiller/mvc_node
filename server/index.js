const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const todoRoutes = require("./src/routes/todo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/todo", todoRoutes);

app.listen(8080, (res, req) => {
  console.log("Connected to port 8080");
});
