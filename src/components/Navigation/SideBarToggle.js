import React from "react";

import classes from "../../styles/SideBarToggle.css";

const sideBarToggle = (props) => (
  <div className={classes.SideBarToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default sideBarToggle;
