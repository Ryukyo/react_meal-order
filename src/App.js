import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PizzaBuilder from "./containers/Food/PizzaBuilder";
import Checkout from "./containers/Checkout";
import Orders from "./containers/Orders";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={PizzaBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
