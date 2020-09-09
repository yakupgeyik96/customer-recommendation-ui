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
        <div className="ui tiny image" style={imageStyle}>
          <img src={this.props.icon}></img>
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
