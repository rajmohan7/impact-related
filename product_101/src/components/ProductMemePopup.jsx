import React, { Component } from "react";
import MemeOnProduct1 from "../Images/MemeOnProduct1.jpg";
import MemeOnProduct2 from "../Images/MemeOnProduct2.webp";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "53%",
    left: "50%",
    right: "5%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    height: "85%",
    justifyContent: "center",
    backgroundColor: "#5f5a5a"
  },
};

class ProductMemePopup extends Component {
  render() {
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
            src={MemeOnProduct1}
            width="700"
            className="border m-2 center-popup-images"
            alt="Evolution of product"
          />
          <img
            src={MemeOnProduct2}
            width="1200"
            className="border m-2 high-margin-top"
            alt="Evolution of product"
          />
        </div>
      </Modal>
    );
  }
}

export default ProductMemePopup;
