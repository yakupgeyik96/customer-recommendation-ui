import React from "react";
import PrivatizedGiftCard from "./PrivatizedGiftCard";
import '../css/Recommendations.css';

class PrivatizedGiftsContainer extends React.Component {

    render() {
        return (
            <div id="privatized-gifts" className="gift-card-container">
                <div className="ui two column grid">
                    <PrivatizedGiftCard
                        message="Kristy is an art director living in New York."
                        link="https://www.enuygun.com/otel/"
                        linkText="Daha fazlası için tıkla!"/>
                    <PrivatizedGiftCard
                        message="Kristy is an art director living in New York."/>
                </div>
            </div>
        );
    }
}

export default PrivatizedGiftsContainer;