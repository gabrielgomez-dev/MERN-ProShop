import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

// MongoDB Connection
connectDB();

// App config
const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors());

// Routes
app.use("/api/v1/products", productRoutes);

// Routes - Error Handling
app.use(notFound)
app.use(errorHandler)

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
