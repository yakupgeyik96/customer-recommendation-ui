import React from "react";

const spanStyle = {
    fontSize: "24px",
    color: "#63BC47",
};

class InfoItem extends React.Component {
    render() {
        return (
            <div className="ui items">
                <div className="item">
                    <div className="ui small image">
                        <i className="location arrow icon" style={{ fontSize: "48px" }}></i>
                    </div>
                    <div className="content">
                        <div className="header">
                            Bizden bu zamana kadar tam
                            <span style={spanStyle}>{` ${this.props.amountOfTicket} `}</span>
                            bilet aldın!
                        </div>
                        <div className="meta">
                            <div className="description">
                                <a href="#link" style={{ color: "#63bc47" }}>
                                    Bir sonrakini almaya ne dersin?
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoItem;