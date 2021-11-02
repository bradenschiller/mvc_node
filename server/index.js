const express = require("express");
const app = express();
const todoRoutes = require("./routes/todo");

app.use("/todo", todoRoutes);

app.listen(8080, (res, req) => {
  console.log("Connected to port 8080");
});
