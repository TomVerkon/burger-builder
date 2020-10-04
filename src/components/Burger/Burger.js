import React from "react";
import PropTypes from "prop-types";
import classes from "./Burger.module.css";
import BurgerIngredient from "./Ingredients/BurgerIngredient";

const Burger = (props) => {
  let ingredients = Object.keys(props.chosenIngredients).map((igKey) => {
    return [...Array(props.chosenIngredients[igKey])].map((_, i) => (
      <BurgerIngredient key={igKey + i} type={igKey} />
    ))
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients to your burger</p>
  }

  console.log(ingredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="BreadTop" />
      {ingredients}
      <BurgerIngredient type="BreadBottom" />
    </div>
  );
};

Burger.propTypes = {
  chosenIngredients: PropTypes.object.isRequired
};

export default Burger;
