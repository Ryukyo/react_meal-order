import React, { Component } from "react";

import Button from "../components/Layout/Button";
import classes from "../styles/ContactData.css";

class ContactData extends Component {
  state = {
    name: "Test",
    email: "test@test.de",
    address: {
      street: "Ludwidgstrasse",
      zip: "12345",
      country: "Germany",
    },
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Please enter your contact information</h4>
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
          <Button btnType="Success">Place Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
