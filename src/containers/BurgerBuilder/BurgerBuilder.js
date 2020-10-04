import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    chosenIngredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0
    },
  };

  render() {
    return (
      <Aux>
        <Burger chosenIngredients={this.state.chosenIngredients}/>
        <BuildControls/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
