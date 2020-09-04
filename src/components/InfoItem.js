import React from "react";

const spanStyle = {
  fontSize: "24px",
  color: "#63BC47",
};

class InfoItem extends React.Component {
  render() {
    return (
      <div class="ui items">
        <div class="item">
          <div class="ui small image">
            <i className="location arrow icon" style={{ fontSize: "48px" }}></i>
          </div>
          <div class="content">
            <div class="header">
              Bizden bu zamana kadar tam
              <span style={spanStyle}>{` ${this.props.amountOfTicket} `}</span>
              bilet aldın!
            </div>
            <div class="meta">
              <div class="description">
                <p style={{ color: "#63bc47" }}>
                  Bir sonrakini almaya ne dersin?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoItem;
