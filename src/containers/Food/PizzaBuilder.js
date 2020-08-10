import React, { Component } from "react";

import Aux from "../../utils/helper";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls";
import Modal from "../../components/Layout/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary";

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
    purchaseable: false,
    ordering: false,
  };

  updatePurchaseState = (ingredients) => {
    // Array of strings -> array numbers -> sum
    const sum = Object.keys(ingredients)
      .map((ingrKey) => {
        return ingredients[ingrKey];
      })
      .reduce((acc, el) => {
        return acc + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    let oldAmount = this.state.ingredients[type];
    let incrAmount = oldAmount + 1;
    let updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = incrAmount;

    let costAdd = INGREDIENT_PRICES[type];
    let oldPrice = this.state.total;
    let newPrice = oldPrice + costAdd;

    this.setState({ total: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ ordering: true });
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
        <Modal display={this.state.ordering}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Pizza ingredients={this.state.ingredients}></Pizza>
        <BuildControls
          ingredientAdder={this.addIngredientHandler}
          ingredientRemover={this.removeIngredientHandler}
          disabled={disabledNotification}
          price={this.state.total}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        ></BuildControls>
      </Aux>
    );
  }
}

export default PizzaBuilder;
