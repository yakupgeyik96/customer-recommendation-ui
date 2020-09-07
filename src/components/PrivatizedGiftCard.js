import React from "react";
import image from "../images/bg1.jpg"

class PrivatizedGiftCard extends React.Component {
    render() {
        return (
            <div className="ui card">
                <div className="ui image">
                    <img src={image} alt="gift-image" />
                </div>
                <div className="content">
                    <div className="description">
                        Kristy is an art director living in New York.
                    </div>
                </div>
            </div>
        );
    }
}

export default PrivatizedGiftCard;