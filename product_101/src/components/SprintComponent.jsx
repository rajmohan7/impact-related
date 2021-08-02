import React, { Component } from "react";
import CompanyLogo from "../Images/Logo-IA.svg";
import MemeOnDevelopers from "../Images/MemeOnDevelopers.jpg";
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
        <img id="logoImgLeft" src={CompanyLogo} alt="Logo of the company" />
        <h2>Evolution of a sprint</h2>
        <div className="mt-2">
          <img
            src={SprintEvolution}
            width="1200"
            className="border"
            alt="Product pie chart"
          />
        </div>
        <button
          className="button-primary mt-2"
          onClick={() => {
            this.props.history.push("/conclusion");
          }}
        >
          Fin!
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
              showSprintMemesPopup: true,
            })
          }
        >
          <i
            className="fa fa-lightbulb-o"
            aria-hidden="true"
            style={{ color: "#ffffff" }}
          ></i>
        </nav>

        {this.state.showSprintMemesPopup ? (
          <ToolsRequiredMemePopup
            showPopup={this.state.showSprintMemesPopup}
            closePopup={() => {
              this.setState({
                showSprintMemesPopup: !this.state.showSprintMemesPopup,
              });
            }}
            imageList={[MemeOnDevelopers]}
          />
        ) : null}
      </div>
    );
  }
}

export default SprintComponent;
