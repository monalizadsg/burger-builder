import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../commons/api";
import "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "./../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "Mona",
        address: "Test street",
        zipCode: "1102",
        country: "Philippines",
      },
      email: "mona@gmail.com",
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <Input
          inputtype='input'
          type='text'
          name='name'
          placeholder='Your name'
        />
        <Input
          inputtype='input'
          type='text'
          name='email'
          placeholder='Your email'
        />
        <Input
          inputtype='input'
          type='text'
          name='street'
          placeholder='Street'
        />
        <Input
          inputtype='input'
          type='text'
          name='postal'
          placeholder='Postal'
        />
        <Button btnType='success' clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className='contact-data'>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
