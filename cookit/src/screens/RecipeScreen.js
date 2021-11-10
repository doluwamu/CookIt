import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "react-bootstrap";
import { firstLetterToUpperCase } from "../helpers/wordHelpers";
import { getRecipeById } from "../redux/actions/recipeActions";
import Loader from "../components/Loader";

const RecipeScreen = ({ match: { params } }) => {
  const { id } = params;
  const dispatch = useDispatch();

  const recipeById = useSelector((state) => state.recipeById);
  const { loading, recipe, error } = recipeById;

  console.log(recipe);

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (error) console.log(error);

  return (
    <>
      <h1 className="recipe-header">{recipe.name}</h1>
      <div className="recipe">
        <Image
          className="recipe-image"
          src={recipe.image}
          alt={recipe.name}
          fluid
        />

        <div className="recipe-info">
          {/* Ingredients */}
          <p className="recipe-ingredients">
            <h2>Ingredients</h2>
            <ol className="recipe-ingredients-list">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="ingredient">
                  {firstLetterToUpperCase(ingredient)}
                </li>
              ))}
            </ol>
          </p>

          {/* Others */}
          <div className="other-recipe-details">
            <p className="recipe-description">
              <h2>Description</h2>
              <p className="description">
                {firstLetterToUpperCase(recipe.description)}
              </p>
            </p>
            <p className="recipe-instructions">
              <h2>Preparation Instructions</h2>
              <ol className="recipe-instructions-list">
                {recipe.instructions.map((instruction) => (
                  <li key={instruction} className="instruction">
                    {firstLetterToUpperCase(instruction)}
                  </li>
                ))}
              </ol>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeScreen;
