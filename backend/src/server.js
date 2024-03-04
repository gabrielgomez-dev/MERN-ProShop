import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import products from "../data/products.js";

// MongoDB Connection
connectDB();

// App config
const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/v1/products/:id", (req, res) => {
  const product = products.find((p) => p._id == req.params.id);
  res.status(200).json(product);
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
