import React from "react";

import classes from "../../styles/Toolbar.css";
import Logo from "../Navigation/Logo";
import NavItems from "../Navigation/NavItems";
import SideBarToggle from "./SideBarToggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <SideBarToggle clicked={props.sideBarToggleClicked} />
    <Logo height="80%" />
    <nav className={classes.Desktop}>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;
