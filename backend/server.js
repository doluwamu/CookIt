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

// "node-sass": "^6.0.1",
//     "react": "^17.0.1",
//     "react-bootstrap": "^2.0.2",
//     "react-dom": "^17.0.1",
//     "react-helmet": "^6.1.0",
//     "react-redux": "^7.2.6",
//     "react-router-dom": "^6.0.1",
//     "react-scripts": "4.0.1",
//     "redux": "^4.1.2",
