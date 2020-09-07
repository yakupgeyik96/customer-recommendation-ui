import React from "react";
import "../css/TextView.css";
import * as texts from "./bodyText";
class TextView extends React.Component {
    render() {
        return (
            <div className="ui raised very padded text container segment">
                <p className="intro">{`Merhaba  ${this.props.username} ! İşte son biletin:`}</p>
                <div className="grid-container">
                    <div className="grid-div">
                        <i className="plane icon" style={{fontSize: "48px"}}/>
                    </div>

                    <div className="grid-div grid-text">
                        <p className="ticket-description">
                            {this.props.lastFlightDate} - {this.props.lastFlightLocation}
                        </p>
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