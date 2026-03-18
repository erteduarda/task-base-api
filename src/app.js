import express from "express";
import routes from "./routers/index.js";

const app = express();

routes(app);

export default app;
