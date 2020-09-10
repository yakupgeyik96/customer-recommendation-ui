import React from "react";
import "../css/TextView.css";

class TextView extends React.Component {
  render() {
    return (
      //uçak bileti tasarımının gösterildiği kısım
      <div className="ui raised very padded text container segment">
        <p className="intro">{`Merhaba  ${this.props.username} ! İşte son biletin:`}</p>
        <div className="grid-container">
          <div className="grid-div">
            {/*icon div'i*/}
            <i
              className="plane icon"
              style={{
                fontSize: "48px",
                color: "#63bc47",
                textShadow: "2px 4px 6px #8a8a8a",
              }}
            />
          </div>
          {/*bilet bilgileri*/}
          <div className="grid-div grid-text">
            <p className="ticket-description">
              {this.props.lastFlightDate} - {this.props.lastFlightOrigin} -{" "}
              {this.props.lastFlightDestination}
            </p>
            <p className="ticket-text">
              <i>
                <a
                  href="https://www.enuygun.com/ucak-bileti/"
                  style={{ color: "#63bc47" }}
                  target="_blank"
                >
                  Yeni seyahatini planlayalım mı?
                </a>
              </i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TextView;
