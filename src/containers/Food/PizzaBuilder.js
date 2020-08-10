import React, { Component } from "react";

import Aux from "../../utils/helper";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls";

const INGREDIENT_PRICES = {
  olive: 0.2,
  cheese: 0.4,
  meat: 1.2,
  bacon: 0.7,
};
class PizzaBuilder extends Component {
  state = {
    ingredients: {
      olive: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
    total: 5,
  };

  addIngredientHandler = (type) => {
    let oldAmount = this.state.ingredients[type];
    let incrAmount = oldAmount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = incrAmount;

    const costAdd = INGREDIENT_PRICES[type];
    const oldPrice = this.state.total;
    const newPrice = oldPrice + costAdd;

    this.setState({ total: newPrice, ingredients: updatedIngredients });
  };

  removeIngredientHandler = (type) => {};

  render() {
    return (
      <Aux>
        <Pizza ingredients={this.state.ingredients}></Pizza>
        <BuildControls
          ingredientAdder={this.addIngredientHandler}
        ></BuildControls>
      </Aux>
    );
  }
}

export default PizzaBuilder;
