import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    olive: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  total: 3,
};

const INGREDIENT_PRICES = {
  olive: 0.3,
  cheese: 0.4,
  meat: 1.2,
  bacon: 0.8,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        total: state.total + INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        total: state.total - INGREDIENT_PRICES[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
