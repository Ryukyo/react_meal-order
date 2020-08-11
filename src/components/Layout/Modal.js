import React, { Component } from "react";
import classes from "../../styles/Modal.css";
import Aux from "../../utils/helper";
import Backdrop from "./Backdrop";

class Modal extends Component {
  // prevent rendering of modal when other props than display have changed
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.display !== this.props.display ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.display} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.display
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.display ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Modal;
