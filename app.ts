import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// ROUTERS
import tasksRouter from './routes/tasks.js';
// Middlewares
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';
// Access .env file
dotenv.config();
// Create HTTP Server
const app = express();
// Body Parser
app.use(express.json());
// Serving Static Files
app.use(express.static('./public'));
// API ROUTES
app.use('/api/v1/tasks', tasksRouter);
// NOT FOUND Handler
app.use(notFound);
// Global Error Handler
app.use(errorHandler);
// Connect to Database and Start Listening
try {
  await mongoose.connect(process.env.MONGO_URL!);
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
} catch (error) {
  console.log(error);
  process.exit(0);
}
