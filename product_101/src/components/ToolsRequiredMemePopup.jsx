import React, { Component } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "5%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    height: "90%",
    justifyContent: "center",
  },
};

class ToolsRequiredMemePopup extends Component {
  render() {
    console.log(this.props.imageList, "this.props.imageList");
    return (
      <Modal
        isOpen={this.props.showPopup}
        onRequestClose={this.props.closePopup}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <i
          className="fa fa-times close-icon text-right"
          onClick={this.props.closePopup}
        />
        <div className="image-container">
          <img
            src={this.props.imageList[0]}
            width="700"
            className="border m-2 center-popup-images"
            alt="Evolution of product"
          />
        </div>
      </Modal>
    );
  }
}

export default ToolsRequiredMemePopup;
