import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000; // The port your express server will be running on.

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

// POST route example
app.post('/api/data', (req: Request, res: Response) => {
  const data = req.body;
  console.log('Received data:', data);
  res.status(201).json({ message: 'Data received successfully', data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});