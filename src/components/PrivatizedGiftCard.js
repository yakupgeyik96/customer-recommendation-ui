import React from "react";
import image from "../images/bg1.jpg";

class PrivatizedGiftCard extends React.Component {
    render() {
        return (
            <div className="column">
                <div className="ui fluid card">
                    <div className="image">
                        <img src={image} />
                    </div>
                    <div className="content">
                        <div className="description">
                            <span style={{ fontSize: '20px' }}>
                                {this.props.message}
                            </span>
                        </div>
                    </div>
                    <div className="extra content">
                        <a href={this.props.link} target="_blank"
                            style={{ color: 'green', fontSize: '16px' }}>
                            {this.props.linkText}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PrivatizedGiftCard;