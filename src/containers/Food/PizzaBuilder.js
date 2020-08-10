import React, { Component } from "react";

import Aux from "../../utils/helper";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls";

class PizzaBuilder extends Component {
  state = {
    ingredients: {
      olive: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Aux>
        <Pizza ingredients={this.state.ingredients}></Pizza>
        <BuildControls></BuildControls>
      </Aux>
    );
  }
}

export default PizzaBuilder;
