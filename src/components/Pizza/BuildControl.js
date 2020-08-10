import React from "react";

import classes from "../../styles/BuildControl.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button onClick={props.added} className={classes.Add}>
      Add
    </button>
    <button className={classes.Remove}> Remove </button>
  </div>
);

export default buildControl;
