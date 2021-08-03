import React, { Component } from "react";
import CompanyLogo from "../Images/Logo-IA.svg";
import EvolutionOfProduct from "../Images/EvolutionOfProduct.png";
import ProductPieChart from "../Images/ProductPieChart.png";
import ProductMemePopup from "./ProductMemePopup";

class IntroductionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProductPieChart: false,
      showProductMemesPopup: false,
    };
  }
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
        />
        <h2 className="main-heading">EVOLUTION OF A PRODUCT</h2>
        <div className="mt-4">
          {this.state.showProductPieChart ? (
            <img
              src={ProductPieChart}
              width="1200"
              height="600"
              className="border mr-2"
              alt="Product pie chart"
            />
          ) : (
            <img
              src={EvolutionOfProduct}
              width="1200"
              height="600"
              className="border mr-2"
              alt="Evolution of product"
            />
          )}
        </div>
        <button
          className="button-primary mt-3"
          onClick={
            !this.state.showProductPieChart
              ? () => {
                  this.setState({
                    showProductPieChart: !this.state.showProductPieChart,
                  });
                }
              : () => {
                  this.props.history.push("/toolsRequired");
                }
          }
        >
          {this.state.showProductPieChart
            ? `Show me the tools required !`
            : `How do we build the ideal product ?`}
        </button>

        <nav
          id={"memeIconStyle"}
          className={"active mt-1 mr-2"}
          title={"Product memes"}
          onClick={() =>
            this.setState({
              showProductMemesPopup: true,
            })
          }
        >
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
        </nav>

        {this.state.showProductMemesPopup ? (
          <ProductMemePopup
            showPopup={this.state.showProductMemesPopup}
            closePopup={() => {
              this.setState({
                showProductMemesPopup: !this.state.showProductMemesPopup,
              });
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default IntroductionComponent;
