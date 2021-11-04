const todoModels = require("../models/todo");

const getTodos = (req, res) => res.json(todoModels.todos);

const createTodos = (req, res) => {
  const todoItem = req.body;
  const lastTodoId = todoModels.todos.length;
  todoModels.todos.push({
    taskId: lastTodoId + 1,
    completed: false,
    ...todoItem,
  });

  res.json(todoModels.todos);
};

module.exports = {
  getTodos,
  createTodos,
};

