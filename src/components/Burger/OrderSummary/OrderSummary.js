import React from "react";
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const OrderSummary = (props) => {
  const ingredientListItems = Object.keys(props.chosenIngredients).map(
    (igKey, index) => {
      return (
        <li key={index}>
          <span style={{ textTransform: "capitalize" }}>
            {igKey}: {props.chosenIngredients[igKey]}
          </span>
        </li>
      );
    }
  );
  return (
    <>
      <h3>Order Summary</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientListItems}
      </ul>
      <p><strong>Your Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Check-Out?</p>
      <Button btnType={'Danger'} clickHandler={props.cancelHandler}>CANCEL</Button>
      <Button btnType={'Success'} clickHandler={props.continueHandler}>CONTINUE</Button>
    </>
  );
};

OrderSummary.propTypes = {
  chosenIngredients: PropTypes.object.isRequired,
  cancelHandler: PropTypes.func.isRequired,
  continueHandler: PropTypes.func.isRequired,
};

export default OrderSummary;
