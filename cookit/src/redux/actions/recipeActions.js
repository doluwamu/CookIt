import axios from "axios";
import {
  GET_RECIPE_BY_ID_FAIL,
  GET_RECIPE_BY_ID_REQUEST,
  GET_RECIPE_BY_ID_SUCCESS,
  LIST_RECIPES_FAIL,
  LIST_RECIPES_REQUEST,
  LIST_RECIPES_SUCCESS,
} from "../constants/recipeConstants";

export const listRecipes = () => async (dispatch) => {
  dispatch({ type: LIST_RECIPES_REQUEST });

  try {
    const { data } = await axios.get("/api/v1/recipes");
    dispatch({
      type: LIST_RECIPES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_RECIPES_FAIL,
      payload: error,
    });
  }
};

export const getRecipeById = (id) => async (dispatch) => {
  dispatch({ type: GET_RECIPE_BY_ID_REQUEST });

  try {
    const { data } = await axios.get(`/api/v1/recipes/${id}`);
    dispatch({
      type: GET_RECIPE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_RECIPE_BY_ID_FAIL,
      payload: error,
    });
  }
};
