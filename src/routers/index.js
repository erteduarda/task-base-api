import express from "express";
import tasks from "./task-router.js";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use(express.json(), tasks);
};

export default routes;
