import React, { Component } from "react";
import Button from "../../UI/Button/Button";
import PropTypes from "prop-types";

class OrderSummary extends Component {
  
  componentWillUpdate() {
    // console.log("[OrderSummary] component will update");
  }


  render() {
    const ingredientListItems = Object.keys(this.props.chosenIngredients).map(
      (igKey, index) => {
        return (
          <li key={index}>
            <span style={{ textTransform: "capitalize" }}>
              {igKey}: {this.props.chosenIngredients[igKey]}
            </span>
          </li>
        );
      }
    );
  
    return (
      <>
        <h3>Order Summary</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientListItems}</ul>
        <p>
          <strong>Your Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Check-Out?</p>
        <Button btnType={"Danger"} clickHandler={this.props.cancelHandler}>
          CANCEL
        </Button>
        <Button btnType={"Success"} clickHandler={this.props.continueHandler}>
          CONTINUE
        </Button>
      </>
    );
  }
}

OrderSummary.propTypes = {
  chosenIngredients: PropTypes.object.isRequired,
  cancelHandler: PropTypes.func.isRequired,
  continueHandler: PropTypes.func.isRequired,
};

export default OrderSummary;
