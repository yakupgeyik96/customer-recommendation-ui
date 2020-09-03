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
            <img src="/images/wireframe/image.png"/>
          </div>
          <div class="content">
            <div class="header">
              Bizden bu zamana kadar tam
              <span style={spanStyle}>{` ${this.props.ticketNumber} `}</span>
              bilet aldın!
            </div>
            <div class="meta">
              <div class="description">
                <p>Hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoItem;
