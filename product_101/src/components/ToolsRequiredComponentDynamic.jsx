import React, { Component } from "react";
import HowManyDevelopers from "../Images/HowManyDevelopers.png";
import ArchitectureDiagram from "../Images/ArchitectureDiagram.png";
import { Element, animateScroll as scroll } from "react-scroll";

class ToolsRequiredComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showArchitecture: false,
      showToolsRequired: false,
    };
  }
  render() {
    let toolsReqArray = [
      {
        heading: "UX-related tool",
        labels: ["Adobe XD"],
        urls: [
          "https://xd.adobe.com/view/815061c2-31b7-42fe-bbf8-96f7a0129e72-d403/",
        ],
      },
      {
        heading: "Sprint related tool",
        labels: ["Jira"],
        urls: [
          "https://impactanalytics.atlassian.net/secure/RapidBoard.jspa?rapidView=6&projectKey=GAS",
        ],
      },
    ];
    return (
      <div>
        {this.state.showArchitecture ? (
          <h2>Architecture diagram</h2>
        ) : (
          <h2>How many developers do I need?</h2>
        )}
        <div>
          <img
            src={
              this.state.showArchitecture
                ? ArchitectureDiagram
                : HowManyDevelopers
            }
            width="1200"
            className="border"
            alt="Product pie chart"
          />
        </div>
        <button
          className="button-primary mt-2"
          onClick={() => {
            scroll.scrollToBottom();
            if (this.state.showArchitecture) {
              this.setState({
                showToolsRequired: true,
              });
            } else {
              this.setState({
                showArchitecture: true,
              });
            }
          }}
        >
          {this.state.showArchitecture
            ? `Tools Required`
            : `Architecture view!`}
        </button>

        {this.state.showToolsRequired ? (
          <div>
            {toolsReqArray.map((toolsData, index) => {
              console.log(toolsData, "toolsData", toolsData.heading);
              <h1> {toolsData.heading}</h1>;
              // <div className="row">
              //   <div className="col-md-3">{Object.keys(toolsData)[0]}</div>
              //   {/* <div
              //     class="hexagon ml-2"
              //     onClick={() => {
              //       window.open(Object.keys(toolsData)[0].urls, "_blank");
              //     }}
              //   >
              //     <div class="text-in-hexagon ">
              //       <h1>{Object.keys(toolsData)[0].labels}</h1>
              //     </div>
              //   </div> */}
              // </div>;
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default ToolsRequiredComponent;
