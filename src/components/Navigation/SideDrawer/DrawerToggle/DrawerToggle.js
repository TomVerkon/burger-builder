import React from "react";
import PropTypes from "prop-types";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.click}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

DrawerToggle.propTypes = {};

export default DrawerToggle;
