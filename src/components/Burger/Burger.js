import React from "react";
import PropTypes from "prop-types";
import classes from "./Burger.module.css";
import BurgerIngredient from "./Ingredients/BurgerIngredient";

const Burger = (props) => {
  let ingredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => (
      <BurgerIngredient key={igKey + i} type={igKey} />
    ))
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients to your burger</p>
  }

  //console.log(ingredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="BreadTop" />
      {ingredients}
      <BurgerIngredient type="BreadBottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default Burger;
