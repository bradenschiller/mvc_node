const taskModel = require("../models/todo");

const getTasks = (req, res) => res.json(taskModel.tasks);

const createTasks = (req, res) => {
  const { taskName, taskDescription } = req.body;
  const lastTaskId = taskModel.tasks.length;
  taskModel.tasks.push({
    taskId: lastTodoId + 1,
    taskName,
    taskDescription,
    completed: false,
  });

  res.json(taskModel.tasks);
};

module.exports = {
  getTasks,
  createTasks,
};
