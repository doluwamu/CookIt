import Recipe from "../models/recipeModel.js";

export const getRecipes = async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const recipes = await Recipe.find({ ...keyword });
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
