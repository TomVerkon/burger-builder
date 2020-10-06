import React from "react";

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
      <p>Continue to Check-Out?</p>
    </>
  );
};

export default OrderSummary;
