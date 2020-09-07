import React from "react";

const spanStyle = {
    fontSize: "24px",
    color: "#63BC47",
};

const imageStyle = {
  padding: "10px",
  alignItems: "center",
};

class InfoItem extends React.Component {

  render() {
    const iconColor = this.props.iconColor;
    return (
      <div className="item">
        <div className="image" style={imageStyle}>
          <i
            className={`huge ${this.props.icon}`}
            style={{
              fontSize: "56px",
              color: iconColor,
            }}
          ></i>
        </div>
        <div className="middle aligned content">
          <div className="header">
            {this.props.beginText}
            <span style={spanStyle}>{` ${this.props.textSelector} `}</span>
            {this.props.endText}
          </div>
          <div className="meta">
            <div className="description">
              <a href={this.props.link} style={{ color: "#63bc47" }}>
                <i>{this.props.linkText}</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoItem;