import React from "react";

import classes from "../../styles/Toolbar.css";
import Logo from "../Navigation/Logo";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </header>
);

export default toolbar;
