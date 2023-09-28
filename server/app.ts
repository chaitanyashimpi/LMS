import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

// Body Parser
app.use(express.json({ limit: "50mb" }));

// Cookie Parser
app.use(cookieParser())

// CORS => cross origin resource sharings

