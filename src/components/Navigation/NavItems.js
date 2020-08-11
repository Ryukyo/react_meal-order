import React from "react";

import classes from "../../styles/NavItems.css";
import NavItem from "./NavItem";

const navItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/" exact>
      Builder
    </NavItem>
    <NavItem link="/orders">Orders</NavItem>
  </ul>
);

export default navItems;
