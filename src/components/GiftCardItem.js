import React from "react";
import '../css/GiftCardItem.css';
import image from '../images/bg1.jpg';

class GiftCardItem extends React.Component {
    render() {
        return (
            <div className="gift-card">
                <img src={this.props.imageLink} alt="gift-card" style={{ width: '100%' }} />
                <div className="gift-card-content">
                    <span>{this.props.content}</span>
                </div>
                <hr />
                <div className="gift-card-link">
                    <a href={this.props.link}
                        target="_blank">
                        {this.props.linkText}
                    </a>
                </div>
            </div>
        );
    }
}

export default GiftCardItem;