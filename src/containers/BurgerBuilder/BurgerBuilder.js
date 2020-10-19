import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import INGREDIENT_PRICES from '../../INGREDIENT_PRICES'

class BurgerBuilder extends Component {
  state = {
    chosenIngredients: {
      Salad: 0,
      Bacon: 0,
      Cheese: 0,
      Meat: 0,
    },
    totalPrice: 4.0, /* 4.00 is base price */
    purchaseable: false,
    purchasing: false,
    loading: false,
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => { return ingredients[igKey]; })
      .reduce((sum, el) => { return sum + el; }, 0);
    this.setState({ purchaseable: sum > 0 });
  };

  incrementIngredientHandler = (type) => {
    const updatedCount = this.state.chosenIngredients[type] + 1;
    const tempIngredients = { ...this.state.chosenIngredients };
    tempIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, chosenIngredients: tempIngredients });
    this.updatePurchaseState(tempIngredients);
  };

  decrementIngredientHandler = (type) => {
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

  purchasingContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.chosenIngredients,
      price: this.state.totalPrice,
      customer: {
        name: "Joe BagoDonuts",
        address: {
          street: "211 Dalton Dr",
          city: "Buffalo",
          zipcode: "14223",
        },
        email: "joebagodonuts@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log('Post response: ' + JSON.stringify(response));
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error) => {
        console.log('Post error: ' + JSON.stringify(error));
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    const disabledInfo = { ...this.state.chosenIngredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        chosenIngredients={this.state.chosenIngredients}
        cancelHandler={this.purchasingCancelHandler}
        continueHandler={this.purchasingContinueHandler}
        price={this.state.totalPrice}
      />
    );
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchasingCancelHandler}
        >
          {orderSummary}
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
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
