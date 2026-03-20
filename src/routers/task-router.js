import express from "express";
import TaskRouter from "../controllers/task-controller.js";

const router = express.Router();

router.get("/tasks", TaskRouter.tasksList);
router.get("/tasks:id", TaskRouter.tasksListPerId);

export default router;
