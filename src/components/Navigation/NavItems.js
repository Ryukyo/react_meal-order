import React from "react";

import classes from "../../styles/NavItems.css";
import NavItem from "./NavItem";

const navItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/" active>
      Builder
    </NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default navItems;
