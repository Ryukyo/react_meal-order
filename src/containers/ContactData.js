import React, { Component } from "react";

import Button from "../components/Layout/Button";
import classes from "../styles/ContactData.css";
import axios from "../axios-orders";
import Spinner from "../components/Layout/Spinner";

class ContactData extends Component {
  state = {
    name: "Test",
    email: "test@test.de",
    address: {
      street: "Ludwidgstrasse",
      zip: "12345",
      country: "Germany",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Test",
        address: {
          street: "Ludwidgstrasse",
          zip: "12345",
          country: "Germany",
        },
        email: "test@test.de",
      },
      deliveryMethod: "express",
    };

    axios
      .post("/orders.json", order)
      .then((res) => {
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
        <input
          className={classes.Input}
          type="text"
          name="email"
          placeholder="Your Email"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Your Street"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="zip"
          placeholder="Your Zip Code"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="country"
          placeholder="Your Country"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        ></input>
        <Button btnType="Success" clicked={this.orderHandler}>
          Place Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Please enter your contact information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
