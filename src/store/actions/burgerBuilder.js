import * as actionsTypes from "./actionsTypes";
import axios from "../../commons/api";

export const addIngredient = (name) => {
  return {
    type: actionsTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionsTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionsTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientFailed = () => {
  return {
    type: actionsTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        "https://my-burger-react-8356c-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientFailed());
      });
  };
};
