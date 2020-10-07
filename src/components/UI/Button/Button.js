import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clickHandler}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  btnType:PropTypes.oneOf(['Success', 'Danger']).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
