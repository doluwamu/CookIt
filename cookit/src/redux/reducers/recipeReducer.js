import {
  GET_RECIPE_BY_ID_FAIL,
  GET_RECIPE_BY_ID_REQUEST,
  GET_RECIPE_BY_ID_SUCCESS,
  LIST_RECIPES_FAIL,
  LIST_RECIPES_REQUEST,
  LIST_RECIPES_SUCCESS,
} from "../constants/recipeConstants";

export const recipesListReducer = (state = { recipes: [] }, action) => {
  switch (action.type) {
    case LIST_RECIPES_REQUEST:
      return { loading: true };

    case LIST_RECIPES_SUCCESS:
      return { loading: false, recipes: action.payload };

    case LIST_RECIPES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const recipeByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_RECIPE_BY_ID_REQUEST:
      return { loading: true };

    case GET_RECIPE_BY_ID_SUCCESS:
      return { loading: false, recipe: action.payload };

    case GET_RECIPE_BY_ID_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
