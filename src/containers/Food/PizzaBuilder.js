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

  removeIngredientHandler = (type) => {
    let oldAmount = this.state.ingredients[type];

    //avoid removing amount of ingredient when there are already no ingredients selected
    if (oldAmount <= 0) return;

    let incrAmount = oldAmount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = incrAmount;

    const costDec = INGREDIENT_PRICES[type];
    const oldPrice = this.state.total;
    const newPrice = oldPrice - costDec;

    this.setState({ total: newPrice, ingredients: updatedIngredients });
  };

  render() {
    // assign true or false to ingredient if amount <= 0
    const disabledNotification = {
      ...this.state.ingredients,
    };
    for (let key in disabledNotification) {
      disabledNotification[key] = disabledNotification[key] <= 0;
    }
    return (
      <Aux>
        <Pizza ingredients={this.state.ingredients}></Pizza>
        <BuildControls
          ingredientAdder={this.addIngredientHandler}
          ingredientRemover={this.removeIngredientHandler}
          disabled={disabledNotification}
          price={this.state.total}
        ></BuildControls>
      </Aux>
    );
  }
}

export default PizzaBuilder;
