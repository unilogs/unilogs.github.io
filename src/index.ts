import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import apiRoutes from "./routes/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../')));

// API routes
app.use("/api", apiRoutes);

// All other GET requests will serve the Hyperspace index.html
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});