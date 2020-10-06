import React from "react";
// import PropTypes from 'prop-types'
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "Salad" },
  { label: "Bacon", type: "Bacon" },
  { label: "Cheese", type: "Cheese" },
  { label: "Meat", type: "Meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        <strong>Current price: {props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            label={ctrl.label}
            key={ctrl.label}
            incHandler={() => props.incHandler(ctrl.type)}
            decHandler={() => props.decHandler(ctrl.type)}
            disabled={props.disabledInfo[ctrl.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.purchasingHandler}
      >
        ORDER NOW
      </button>
    </div>
  );
};

// BuildControls.propTypes = {

// }

export default BuildControls;
