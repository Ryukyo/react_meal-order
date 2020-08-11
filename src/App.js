import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import PizzaBuilder from "./containers/Food/PizzaBuilder";
import Checkout from "./containers/Checkout";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={PizzaBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
