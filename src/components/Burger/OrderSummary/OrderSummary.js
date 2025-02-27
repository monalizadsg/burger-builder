import React from "react";
import Button from "./../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price:</strong> {props.price.toFixed(2)}
      </p>
      <p>Continue to checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType='danger'>
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType='success'>
        CONTINUE
      </Button>
    </div>
  );
};

export default OrderSummary;
