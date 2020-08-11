import React from "react";
import foodLogo from "../../assets/imgs/food_logo.png";
import classes from "../../styles/Logo.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={foodLogo} alt="company-logo" />
  </div>
);

export default logo;
