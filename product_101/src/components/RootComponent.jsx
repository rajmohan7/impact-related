import React, { Component } from "react";
import { Link } from "react-router-dom";
import Product from "../Images/Product.png";

class RootComponent extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={Product} className="App-logo" alt="logo" />
          <p className="mt-4">Product 101</p>
          <Link to="/introduction">
            <button className="button-primary">Dive in!</button>
          </Link>
        </header>
      </div>
    );
  }
}

export default RootComponent;
