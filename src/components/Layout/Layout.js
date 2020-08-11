import React, { Component } from "react";
import Aux from "../../utils/helper";
import classes from "../../styles/Layout.css";
import Toolbar from "../Navigation/Toolbar";
import SideBar from "../Navigation/SideBar";

class Layout extends Component {
  state = {
    showSideBar: false,
  };

  sideBarClosingHandler = () => {
    this.setState({ showSideBar: false });
  };

  // Avoid manipulating state directly and async (setState)
  sideBarToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar sideBarToggleClicked={this.sideBarToggleHandler} />
        <SideBar
          closed={this.sideBarClosingHandler}
          open={this.state.showSideBar}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
