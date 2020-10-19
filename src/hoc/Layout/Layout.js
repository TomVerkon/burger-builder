import React, { Component } from "react";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  handleSideDrawerToggle = () => {
    this.setState((previousState) => {
      return { showSideDrawer: !previousState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <Toolbar onSideDrawerOpen={this.handleSideDrawerToggle} />
        <SideDrawer
          show={this.state.showSideDrawer}
          clicked={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
