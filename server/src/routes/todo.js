const express = require("express");
const router = express.Router();
const taskController = require("../controllers/todo");

router.get("/", taskController.getTasks);
router.post("/", taskController.createTasks);

module.exports = router;
