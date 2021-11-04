const todoModels = require("../models/todo");

exports.getTodos = (req, res) => {
  res.json(todoModels.todos);
};
