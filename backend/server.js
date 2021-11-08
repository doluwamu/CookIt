import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { provideErrorHandler } from "./middlewares/errors.js";

import recipeRoutes from "./routes/recipeRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to DB");
  }
);

const app = express();
app.use(express.json());
app.use(provideErrorHandler);

app.get("/", (req, res) => {
  return res.json({ message: "Ready to create your  APIs" });
});

app.use("/api/v1/recipes", recipeRoutes);
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
