import express from "express";
import { getRecipes, getRecipesById } from "../controllers/recipeController.js";

const router = express.Router();

router.route("/").get(getRecipes);
router.route("/:id").get(getRecipesById);

export default router;
