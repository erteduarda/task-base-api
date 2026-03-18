class TaskRouter {
  static async listTasks(req, res, next) {
    try {
      const tasks = ["Task 1", "Task 2"];
      res.status(200).send(tasks);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default TaskRouter;
