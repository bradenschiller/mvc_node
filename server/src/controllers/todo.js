const taskModel = require("../models/todo");

// retrieve all tasks
const getTasks = (req, res) => res.json(taskModel.tasks);

// create a task
const createTasks = (req, res) => {
  const { taskName, taskDescription } = req.body;
  const lastTaskId = taskModel.tasks.length;
  taskModel.tasks.push({
    taskId: lastTaskId + 1,
    taskName,
    taskDescription,
    completed: false,
  });

  res.json(taskModel.tasks);
};

// update a task
const updateTasks = (req, res) => {
  const { taskId } = req.params;
  const updatedTaskItem = req.body;

  taskModel.tasks.splice(taskModel.tasks.indexOf(taskId), 1, updatedTaskItem);

  res.json(taskModel.tasks[taskId]);
};

// delete a task
const deleteTasks = (req, res) => {
  const { taskId } = req.params;

  taskModel.tasks.splice(taskModel.tasks.indexOf(taskId), 1);

  res.json(taskModel.tasks);
};

module.exports = {
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
};
