import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "../../styles/PizzaIngredient.css";

class PizzaIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "pizza-dough":
        ingredient = <div className={classes.PizzaDough}></div>;
        break;
      case "pizza-topping":
        ingredient = (
          <div className={classes.PizzaSauce}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "olive":
        ingredient = <div className={classes.Olive}></div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}></div>;
        break;
      default:
        ingredient;
    }
    return ingredient;
  }
}

PizzaIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PizzaIngredient;
