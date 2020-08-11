import React, { Component } from "react";

import Aux from "../../utils/helper";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls";
import Modal from "../../components/Layout/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary";
import Spinner from "../../components/Layout/Spinner";
import errorHandler from "../../utils/errorHandler";
import axios from "../../axios-orders";

const INGREDIENT_PRICES = {
  olive: 0.2,
  cheese: 0.4,
  meat: 1.2,
  bacon: 0.7,
};
class PizzaBuilder extends Component {
  state = {
    ingredients: {
      olive: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    total: 3,
    purchaseable: false,
    ordering: false,
    loading: false,
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

  purchaseCancelHandler = () => {
    this.setState({ ordering: false });
  };

  purchaseCheckoutHandler = () => {
    //final product would calculate the total price on server side
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.total,
      customer: {
        name: "Test",
        address: {
          street: "Ludwidgstrasse",
          zip: "12345",
          country: "Germany",
        },
        email: "test@test.de",
      },
      deliveryMethod: "express",
    };

    axios
      .post("/orders.json", order)
      .then((res) => {
        this.setState({ loading: false, ordering: false });
      })
      .catch((error) => {
        this.setState({ loading: false, ordering: false });
      });
  };

  render() {
    // assign true or false to ingredient if amount <= 0
    const disabledNotification = {
      ...this.state.ingredients,
    };

    for (let key in disabledNotification) {
      disabledNotification[key] = disabledNotification[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseContinued={this.purchaseCheckoutHandler}
        purchaseCancelled={this.purchaseCancelHandler}
        totalPrice={this.state.total}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          display={this.state.ordering}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
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

export default errorHandler(PizzaBuilder, axios);
