import React from "react";
import "./TextView.css";

class TextView extends React.Component {
  render() {
    return (
      <div className="ui raised very padded text container segment">
        <p className="intro">{`Merhaba  ${this.props.amountOfTicket} ! İşte son biletin:`}</p>
        <div className="grid-container">
          <div className="grid-div">
            <i className="plane icon" style={{ fontSize: "48px" }}></i>
          </div>
          <div className="grid-div">
            <p className="ticket-description">IST - GZT 1.05.2019 - 12:10:00</p>
          </div>
        </div>
        <p className="intro">Yenisini almaya ne dersin?</p>
      </div>
    );
  }
}

export default TextView;
