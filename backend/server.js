import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Recipe from "./models/recipeModel.js";

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

app.get("/", (req, res) => {
  return res.json({ message: "Ready to create your  APIs" });
});

app.post("/recipe", async (req, res) => {
  try {
    const { name } = req.body;
    const recipe = new Recipe({ name });
    const createdRecipe = await recipe.save();
    res.status(201).json(createdRecipe);
  } catch (err) {
    res.json(err);
  }
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
