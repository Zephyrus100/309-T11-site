import express from "express";
import routes from "./routes.js";
import dotenv from "dotenv";
import cors from "cors";
// TODO: complete me (loading the necessary packages)
dotenv.config();

const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// TODO: complete me (CORS)
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}))
app.use(express.json());
app.use('', routes);

export default app;