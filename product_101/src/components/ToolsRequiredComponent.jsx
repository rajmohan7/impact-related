import React, { Component } from "react";
import HowManyDevelopers from "../Images/HowManyDevelopers.png";
import ArchitectureDiagram from "../Images/ArchitectureDiagram.png";
import { animateScroll as scroll } from "react-scroll";
import ToolsRequiredMemePopup from "./ToolsRequiredMemePopup";
import MemeOnUI from "../Images/MemeOnUI.png";
import MemeOnSonarcloud from "../Images/MemeOnSonarcloud.png";
import MemeOnInstances from "../Images/MemeOnInstances.png";
import MemeOnQA from "../Images/MemeOnQA.png";
import MemeOnProductRelease from "../Images/MemeOnProductRelease.jpeg";
import CompanyLogo from "../Images/Logo-IA.svg";

class ToolsRequiredComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showArchitecture: false,
      showToolsRequired: false,
      showToolsMemePopup: false,
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
        {this.state.showArchitecture ? (
          <h2 className="main-heading">Architecture diagram</h2>
        ) : (
          <h2 className="main-heading">How many developers do I need?</h2>
        )}
        <div>
          <img
            src={
              this.state.showArchitecture
                ? ArchitectureDiagram
                : HowManyDevelopers
            }
            width="1200"
            height={this.state.showArchitecture ? "800" : "600"}
            className="border mr-2"
            alt="Product pie chart"
          />
        </div>
        <button
          className="button-primary my-2"
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
          <div className="my-3">
            <table
              style={{ width: "67%", margin: "0 20.5%", textAlign: "center" }}
            >
              <tr>
                <th className="table-content">Category</th>
                <th className="table-content">Tool(s)</th>
              </tr>
              <tr>
                <td className="table-content">UI/ UX-related</td>
                <td>
                  <div className="row">
                    <div
                      className="square ml-2"
                      onClick={() => {
                        window.open(
                          "https://xd.adobe.com/view/815061c2-31b7-42fe-bbf8-96f7a0129e72-d403/"
                        );
                      }}
                    >
                      <div className="text-in-square">{"Adobe XD"}</div>
                    </div>
                    <div
                      className="square ml-2"
                      onClick={() => {
                        window.open(
                          "https://analytics.google.com/analytics/web/#/p260483434/reports/defaulthome?params=_u..nav%3Ddefault"
                        );
                      }}
                    >
                      <div className="text-in-square">{"Google Analytics"}</div>
                    </div>
                    <div
                      className="square ml-2"
                      onClick={() => {
                        window.open(
                          "https://console.firebase.google.com/u/0/project/assortsmart/storage/assortsmart.appspot.com/files"
                        );
                      }}
                    >
                      <div className="text-in-square">{"Firebase"}</div>
                    </div>
                    <nav
                      id={"sidebarForTool"}
                      className={"active mt-4 ml-4"}
                      title={"Product memes"}
                      onClick={() =>
                        this.setState({
                          showToolsMemePopup: true,
                          imageList: [MemeOnUI],
                        })
                      }
                    >
                      <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                    </nav>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-content">Pre-development related</td>
                <td>
                  <div className="row">
                    <div
                      className="square ml-2"
                      onClick={() => {
                        window.open(
                          "https://impactanalytics.atlassian.net/secure/RapidBoard.jspa?rapidView=6&projectKey=GAS"
                        );
                      }}
                    >
                      <div className="text-in-square">{"Jira"}</div>
                    </div>
                    <div
                      className="square ml-2"
                      onClick={() => {
                        window.open(
                          "https://bitbucket.org/insideinsight/assortment-generic/src/master/"
                        );
                      }}
                    >
                      <div className="text-in-square">{"Bitbucket"}</div>
                    </div>
                    <div
                      className="square ml-2"
                      onClick={() => {
                        window.open(
                          "https://sonarcloud.io/dashboard?id=assortment-generic"
                        );
                      }}
                    >
                      <div className="text-in-square">{"Sonar Cloud"}</div>
                    </div>
                    <nav
                      id={"sidebarForTool"}
                      className={"active mt-4 ml-4"}
                      title={"Product memes"}
                      onClick={() =>
                        this.setState({
                          showToolsMemePopup: true,
                          imageList: [MemeOnSonarcloud],
                        })
                      }
                    >
                      <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                    </nav>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-content">Backend related</td>
                <td>
                  <div className="row">
                    <div
                      className="square ml-3"
                      onClick={() => {
                        window.open(
                          "https://console.cloud.google.com/compute/instances?project=calvin-klein-27"
                        );
                      }}
                    >
                      <div className="text-in-square">{"GCP"}</div>
                    </div>
                    <div
                      className="square ml-2"
                      onClick={() => {
                        window.open(
                          "https://portal.azure.com/#blade/Microsoft_AAD_IAM/ManagedAppMenuBlade/Overview/appId/8f68915e-31dd-4d13-bb35-c4b139f48081/objectId/08cd6cb2-ab7e-455c-8f42-2d8bd5ded454"
                        );
                      }}
                    >
                      <div className="text-in-square">{"Microsoft AD"}</div>
                    </div>
                    <nav
                      id={"sidebarForTool"}
                      className={"active mt-4 ml-4"}
                      title={"Product memes"}
                      onClick={() =>
                        this.setState({
                          showToolsMemePopup: true,
                          imageList: [MemeOnInstances],
                        })
                      }
                    >
                      <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                    </nav>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="table-content">Testing related</td>
                <td>
                  <div className="row">
                    <div
                      className="square ml-2"
                      onClick={() => {
                        window.open(
                          "https://www.blazemeter.com/blog/what%E2%80%99s-the-max-number-of-users-you-can-test-on-jmeter"
                        );
                      }}
                    >
                      <div className="text-in-square">{"J Meter"}</div>
                    </div>
                    <nav
                      id={"sidebarForTool"}
                      className={"active mt-4 ml-4"}
                      title={"Product memes"}
                      onClick={() =>
                        this.setState({
                          showToolsMemePopup: true,
                          imageList: [MemeOnQA],
                        })
                      }
                    >
                      <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                    </nav>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-content">Deployment related</td>
                <td>
                  <div className="row">
                    <div
                      className="square ml-2"
                      onClick={() => {
                        window.open("http://104.197.208.182:8080/");
                      }}
                    >
                      <div className="text-in-square">{"Jenkins"}</div>
                    </div>
                    <div
                      className="square ml-2"
                      onClick={() => {
                        window.open(
                          "https://deployment.iaproducts.ai/#/inventories"
                        );
                      }}
                    >
                      <div className="text-in-square">{"Ansible"}</div>
                    </div>
                    <nav
                      id={"sidebarForTool"}
                      className={"active mt-4 ml-4"}
                      title={"Product memes"}
                      onClick={() =>
                        this.setState({
                          showToolsMemePopup: true,
                          imageList: [MemeOnProductRelease],
                        })
                      }
                    >
                      <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                    </nav>
                  </div>
                </td>
              </tr>
            </table>

            <button
              className="button-primary mt-2"
              onClick={() => {
                this.props.history.push("/sprint");
              }}
            >
              Next
            </button>
          </div>
        ) : null}
        {this.state.showToolsMemePopup ? (
          <ToolsRequiredMemePopup
            showPopup={this.state.showToolsMemePopup}
            closePopup={() => {
              this.setState({
                showToolsMemePopup: !this.state.showToolsMemePopup,
              });
            }}
            imageList={this.state.imageList}
          />
        ) : null}
      </div>
    );
  }
}

export default ToolsRequiredComponent;
