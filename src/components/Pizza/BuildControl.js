import React from "react";

import classes from "../../styles/BuildControl.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button onClick={props.added} className={classes.Add}>
      Add
    </button>
    <button
      onClick={props.removed}
      className={classes.Remove}
      disabled={props.disabled}
    >
      Remove
    </button>
  </div>
);

export default buildControl;
