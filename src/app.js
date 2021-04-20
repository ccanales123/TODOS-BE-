import express, { json } from "express";
import morgan from "morgan";

// importing routes
import taskRoutes from "./routes/tasks";

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/tasks', taskRoutes);


export default app;