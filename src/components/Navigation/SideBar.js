import React from "react";

import classes from "../../styles/SideBar.css";
import Logo from "../Navigation/Logo";
import NavItems from "../Navigation/NavItems";
import Backdrop from "../Layout/Backdrop";
import Aux from "../../utils/helper";

const sideBar = (props) => {
  let attachedStyles = [classes.SideBar, classes.Close];
  if (props.open) {
    attachedStyles = [classes.SideBar, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedStyles.join(" ")}>
        <Logo height="11%" marginBot="32px" />
        <nav>
          <NavItems></NavItems>
        </nav>
      </div>
    </Aux>
  );
};

export default sideBar;
