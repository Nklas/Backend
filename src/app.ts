import express, { Application, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});

// POST route example
app.post("/api/data", (req: Request, res: Response) => {
  const data = req.body;
  console.log("Received data:", data);
  res.status(201).json({ message: "Data received successfully", data });
});

// PUT route example
app.put("/api/data/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  console.log(`Updating data for ID ${id}:`, data);
  res.json({ message: `Data updated successfully for ID ${id}`, data });
});

// DELETE route example
app.delete("/api/data/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(`Deleting data for ID ${id}`);
  res.json({ message: `Data deleted successfully for ID ${id}` });
});

export default app;