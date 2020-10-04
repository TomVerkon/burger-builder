import React from "react";

import classes from "./Layout.module.css";
import Aux from "../../hoc/Auxillary";

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
