import React from "react";
import classes from "../../styles/Modal.css";
import Aux from "../../utils/helper";
import Backdrop from "./Backdrop";

const modal = (props) => (
  <Aux>
    <Backdrop show={props.display} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.display ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.display ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
