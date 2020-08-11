import React from "react";
import Pizza from "../Pizza/Pizza";
import Button from "../Layout/Button";
import classes from "../../styles/CheckoutSummary.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Enjoy your individual meal!</h1>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Pizza ingredients={props.ingredients} />
      </div>
      <Button btnType="Success" clicked={props.onCheckoutContinued}>
        CONTINUE
      </Button>
      <Button btnType="Stop" clicked={props.onCheckoutCancelled}>
        CANCEL
      </Button>
    </div>
  );
};

export default checkoutSummary;
