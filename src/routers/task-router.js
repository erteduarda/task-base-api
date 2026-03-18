import express from "express";
import TaskRouter from "../controllers/task-controller.js";

const router = express.Router();

router.get("/tasks", TaskRouter.listTasks);

export default router;
