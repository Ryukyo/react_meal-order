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
    {controls.map((obj) => (
      <BuildControl
        key={obj.label}
        label={obj.label}
        added={() => props.ingredientAdder(obj.type)}
      />
    ))}
  </div>
);

export default buildControls;
