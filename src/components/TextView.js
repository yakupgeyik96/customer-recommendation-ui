import React from "react";
import "../css/TextView.css";

class TextView extends React.Component {
  render() {
    return (
      <div className="ui raised very padded text container segment">
        <p className="intro">{`Merhaba  ${this.props.amountOfTicket} ! İşte son biletin:`}</p>
        <div className="grid-container">
          <div className="grid-div">
            <i className="plane icon" style={{fontSize: "48px"}}/>
          </div>

          <div className="grid-div grid-text">
            <p className="ticket-description">IST - GZT 1.05.2019 - 12:10:00</p>
            <p className="ticket-text">
              <i>Yenisini almaya ne dersin?</i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TextView;
