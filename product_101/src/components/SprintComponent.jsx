import React, { Component } from "react";
import CompanyLogo from "../Images/Logo-IA.svg";
import MemeOnProductRelease from "../Images/MemeOnProductRelease.jpeg";
import SprintEvolution from "../Images/SprintEvolution.png";
import ToolsRequiredMemePopup from "./ToolsRequiredMemePopup";

class SprintComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSprintMemesPopup: false,
      imageList: [],
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
        <h2 className="main-heading">EVOLUTION OF A SPRINT</h2>
        <div className="mt-4">
          <img
            src={SprintEvolution}
            width="1200"
            className="border"
            alt="Product pie chart"
          />
        </div>
        <button
          className="button-primary mt-3"
          onClick={() => {
            this.props.history.push("/conclusion");
          }}
        >
          Fin!
        </button>

        <nav
          id={"memeIconStyle"}
          className={"active mt-1 mr-2"}
          title={"Product memes"}
          onClick={() =>
            this.setState({
              showSprintMemesPopup: true,
            })
          }
        >
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
        </nav>

        {this.state.showSprintMemesPopup ? (
          <ToolsRequiredMemePopup
            showPopup={this.state.showSprintMemesPopup}
            closePopup={() => {
              this.setState({
                showSprintMemesPopup: !this.state.showSprintMemesPopup,
              });
            }}
            imageList={[MemeOnProductRelease]}
          />
        ) : null}
      </div>
    );
  }
}

export default SprintComponent;
