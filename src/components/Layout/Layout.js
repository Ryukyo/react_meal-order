import React from "react";
import Aux from "../../utils/helper";
import classes from "../../styles/Layout.css";
import Toolbar from "../Navigation/Toolbar";

const layout = (props) => (
  <Aux>
    <Toolbar />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
