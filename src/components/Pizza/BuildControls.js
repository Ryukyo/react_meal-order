import React from "react";

import classes from "../../styles/BuildControls.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Olive", type: "olive" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Total Price: <strong>{props.price.toFixed(2)} € </strong>
    </p>
    {controls.map((obj) => (
      <BuildControl
        key={obj.label}
        label={obj.label}
        added={() => props.ingredientAdder(obj.type)}
        removed={() => props.ingredientRemover(obj.type)}
        disabled={props.disabled[obj.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchaseable}>
      Complete Order
    </button>
  </div>
);

export default buildControls;
