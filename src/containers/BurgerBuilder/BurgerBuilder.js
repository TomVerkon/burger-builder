import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  Salad: 0.3,
  Bacon: 0.5,
  Cheese: 0.2,
  Meat: 1.3,
};
class BurgerBuilder extends Component {
  state = {
    chosenIngredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0,
    },
    totalPrice: 4.0,
    purchaseable: false,
    purchasing: false,
  };

  updatePurchaseState = (ingredients) => {
    // console.log(Object.keys(ingredients));
    // console.log(Object.keys(ingredients).map(igKey => {
    //   return ingredients[igKey]
    // }));
    // console.log(Object.keys(ingredients).map(igKey => {
    //   return ingredients[igKey]
    // }).reduce((sum, el) => {
    //   return sum + el;
    // }, 0));
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  };

  incrementIngredientHandler = (type) => {
    // my solution
    // let tempIngredients = Object.fromEntries(
    //   Object.entries(this.state.chosenIngredients).map(([key, value]) =>
    //     key === type ? [key, value + 1] : [key, value]
    //   )
    // );
    // this.setState({ chosenIngredients: tempIngredients, totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type] });

    // his solution, better cause no iterating through array
    const updatedCount = this.state.chosenIngredients[type] + 1;
    const tempIngredients = { ...this.state.chosenIngredients };
    tempIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, chosenIngredients: tempIngredients });
    this.updatePurchaseState(tempIngredients);
  };

  decrementIngredientHandler = (type) => {
    // my solution
    // let tempIngredients = Object.fromEntries(
    //   Object.entries(this.state.chosenIngredients).map(([key, value]) =>
    //     key === type && value > 0 ? [key, value - 1] : [key, value]
    //   )
    // );
    // his solution
    const updatedCount = this.state.chosenIngredients[type] - 1;
    const tempIngredients = { ...this.state.chosenIngredients };
    tempIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, chosenIngredients: tempIngredients });
    this.updatePurchaseState(tempIngredients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchasingCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const disabledInfo = { ...this.state.chosenIngredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} backdropClicked={this.purchasingCancelHandler}>
          <OrderSummary chosenIngredients={this.state.chosenIngredients} />
        </Modal>
        <Burger chosenIngredients={this.state.chosenIngredients} />
        <BuildControls
          disabledInfo={disabledInfo}
          incHandler={this.incrementIngredientHandler}
          decHandler={this.decrementIngredientHandler}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          purchasingHandler={this.purchasingHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
