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
        <img id="logoImgLeft" src={CompanyLogo} alt="Logo of the company" />
        <h2>Evolution of a product</h2>
        <div className="mt-2">
          {this.state.showProductPieChart ? (
            <img
              src={ProductPieChart}
              width="1200"
              className="border"
              alt="Product pie chart"
            />
          ) : (
            <img
              src={EvolutionOfProduct}
              width="1200"
              className="border"
              alt="Evolution of product"
            />
          )}
        </div>
        <button
          className="button-primary mt-2"
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
            ? `Show me the tools required!`
            : `How do we build the ideal product?`}
        </button>

        <nav
          id={"sidebarMiniInactive"}
          className={"active mt-1 mr-2"}
          style={{
            backgroundColor: "#44677b",
            cursor: "pointer",
            visibility: "visible",
          }}
          title={"Product memes"}
          onClick={() =>
            this.setState({
              showProductMemesPopup: true,
            })
          }
        >
          <i
            className="fa fa-lightbulb-o"
            aria-hidden="true"
            style={{ color: "#ffffff" }}
          ></i>
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
