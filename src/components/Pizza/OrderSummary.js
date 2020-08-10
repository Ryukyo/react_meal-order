import React from "react";

import Aux from "../../utils/helper";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingrKey) => {
    return (
      <li key={ingrKey}>
        <span style={{ textTransform: "capitalize" }}>{ingrKey}</span>:
        {props.ingredients[ingrKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Order Summary</h3>
      <p>The following ingredients will be added to your pizza:</p>
      <ul>{ingredientSummary}</ul>
      <p>Proceed checkout?</p>
    </Aux>
  );
};

export default orderSummary;
