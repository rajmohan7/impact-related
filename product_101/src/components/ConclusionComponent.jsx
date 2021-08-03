import React, { Component } from "react";
import ConclusionImage from "../Images/ConclusionImage.png";
import CompanyLogo from "../Images/Logo-IA.svg";
class ConclusionComponent extends Component {
  render() {
    return (
      <div>
        <img
          id="logoImgLeft"
          src={CompanyLogo}
          alt="Logo of the company"
          onClick={() => {
            this.props.history.push("/");
          }}
          className="mt-4"
        />
        <header className="App-header">
          <img src={ConclusionImage} alt="logo" />
        </header>
      </div>
    );
  }
}

export default ConclusionComponent;
