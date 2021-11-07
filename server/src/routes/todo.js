const express = require("express");
const router = express.Router();
const taskController = require("../controllers/todo");

router.get("/", taskController.getTasks);
router.post("/", taskController.createTasks);
router.put("/:taskId", taskController.updateTasks);
router.delete("/:taskId", taskController.deleteTasks);

module.exports = router;
