import Recipe from "../models/recipeModel.js";

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    return res.json(recipes);
  } catch (error) {
    return res.mongoError(error);
  }
};

export const getRecipesById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    return res.json(recipe);
  } catch (error) {
    return res.mongoError(error);
  }
};
