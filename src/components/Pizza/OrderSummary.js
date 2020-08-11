import React from "react";

import Aux from "../../utils/helper";
import Button from "../Layout/Button";

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
      <p>
        <strong>Total Price: {props.totalPrice.toFixed(2)} € </strong>
      </p>
      <p>Proceed checkout?</p>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        PROCEED
      </Button>
      <Button btnType="Stop" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
    </Aux>
  );
};

export default orderSummary;
