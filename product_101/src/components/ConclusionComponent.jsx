import React, { Component } from "react";
import { Link } from "react-router-dom";
import ConclusionImage from "../Images/ConclusionImage.png";

class ConclusionComponent extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={ConclusionImage} alt="logo" />
        </header>
      </div>
    );
  }
}

export default ConclusionComponent;
