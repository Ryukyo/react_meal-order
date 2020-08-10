import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import PizzaBuilder from "./containers/Food/PizzaBuilder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <PizzaBuilder></PizzaBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
