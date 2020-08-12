import React, { Component } from "react";
import { connect } from "react-redux";

import Aux from "../../utils/helper";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls";
import Modal from "../../components/Layout/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary";
import Spinner from "../../components/Layout/Spinner";
import errorHandler from "../../utils/errorHandler";
import axios from "../../axios-orders";
import * as actionTypes from "../../store/actions";

class PizzaBuilder extends Component {
  // UI relevant states only
  state = {
    ordering: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get("https://food-order-mvp.firebaseio.com/ingredients.json")
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  updatePurchaseState = (ingredients) => {
    // Array of strings -> array numbers -> sum
    const sum = Object.keys(ingredients)
      .map((ingrKey) => {
        return ingredients[ingrKey];
      })
      .reduce((acc, el) => {
        return acc + el;
      }, 0);
    return sum > 0;
  };

  purchaseHandler = () => {
    this.setState({ ordering: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ ordering: false });
  };

  purchaseCheckoutHandler = () => {
    this.props.history.push("/checkout");
  };

  render() {
    // assign true or false to ingredient if amount <= 0
    const disabledNotification = {
      ...this.props.ings,
    };

    for (let key in disabledNotification) {
      disabledNotification[key] = disabledNotification[key] <= 0;
    }

    let orderSummary = null;
    let pizza = this.state.error ? (
      <p>Failed to load ingredients</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      pizza = (
        <Aux>
          <Pizza ingredients={this.props.ings}></Pizza>
          <BuildControls
            ingredientAdder={this.props.onIngredientAdded}
            ingredientRemover={this.props.onIngredientRemoved}
            disabled={disabledNotification}
            price={this.props.total}
            purchaseable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
          ></BuildControls>
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseContinued={this.purchaseCheckoutHandler}
          purchaseCancelled={this.purchaseCancelHandler}
          totalPrice={this.props.total}
        />
      );
    }

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
        {pizza}
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    total: state.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingrName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingrName }),
    onIngredientRemoved: (ingrName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingrName,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(errorHandler(PizzaBuilder, axios));
