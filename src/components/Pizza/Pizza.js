import React from "react";

import classes from "../../styles/Pizza.css";
import PizzaIngredient from "./PizzaIngredient";

const pizza = (props) => {
  // reduce the array of ingredients to check whether array is empty (else it is an array of empty arrays)
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingrKey) => {
      return [...Array(props.ingredients[ingrKey])].map((_, index) => {
        return <PizzaIngredient key={ingrKey + index} type={ingrKey} />;
      });
    })
    .reduce((acc, el) => {
      return acc.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please add ingredients! </p>;
  }
  return (
    <div className={classes.Pizza}>
      {transformedIngredients}
      <PizzaIngredient type="pizza-topping" />
      <PizzaIngredient type="pizza-dough" />
    </div>
  );
};

export default pizza;
