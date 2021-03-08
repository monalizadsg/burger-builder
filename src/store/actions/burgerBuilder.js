import * as actionsTypes from "./actionsTypes";

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
  return {
    type: actionsTypes.INIT_INGREDIENTS,
  };
};
