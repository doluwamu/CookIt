import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { firstLetterToUpperCase } from "../helpers/wordHelpers";
import { getRecipeById } from "../redux/actions/recipeActions";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import { ServerError } from "../errors/ServerErrors";

const RecipeScreen = ({ match: { params } }) => {
  const { id } = params;
  const dispatch = useDispatch();

  const recipeById = useSelector((state) => state.recipeById);
  const { loading, recipe, error } = recipeById;

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loader redirecting={true} />;
  }

  if (error) {
    return <ServerError error={error} />;
  }

  return (
    <>
      <Meta title={recipe.name} />

      <Link className="btn btn-light" to="/">
        Go Back
      </Link>

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
          <div className="recipe-ingredients">
            <h2>Ingredients</h2>
            <ol className="recipe-ingredients-list">
              {recipe.ingredients &&
                recipe.ingredients.map((ingredient) => (
                  <li key={ingredient} className="ingredient">
                    {firstLetterToUpperCase(ingredient)}
                  </li>
                ))}
            </ol>
          </div>

          {/* Others */}
          <div className="other-recipe-details">
            <div className="recipe-description">
              <h2>Description</h2>
              <p className="description">
                {firstLetterToUpperCase(recipe.description)}
              </p>
            </div>
            <div className="recipe-instructions">
              <h2>Preparation Instructions</h2>
              <ol className="recipe-instructions-list">
                {recipe.instructions &&
                  recipe.instructions.map((instruction) => (
                    <li key={instruction} className="instruction">
                      {firstLetterToUpperCase(instruction)}
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeScreen;
