import React from "react";
import '../css/Recommendations.css';
import GiftCardItem from "./GiftCardItem";

class GiftCardContainer extends React.Component {

    render() {
        return (
            <div id="privatized-gifts" className="gift-card-container">
                    {/*<PrivatizedGiftCard
                        message="Kristy is an art director living in New York."
                        link="https://www.enuygun.com/otel/"
                        linkText="Daha fazlası için tıkla!"/>
                        <PrivatizedGiftCard
                        message="Kristy is an art director living in New York."/> */}

                <GiftCardItem
                    content="Kristy is an art director living in New York."
                    imageLink="https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/nashira-resort-aqua-spa-genel-39554356.webp"
                    link="https://www.enuygun.com/otel/"
                    linkText="Daha Fazlası..."/>

                    <GiftCardItem
                    content="Kristy is an art director living in New York."
                    imageLink="https://cdn.shopify.com/s/files/1/2504/1616/products/fee525424486bc85c5d5d1bf1c0f05a7_1200x1200.jpg?v=1591743256"
                    link="https://www.enuygun.com/otel/"
                    linkText="Daha Fazlası..."/>
            </div>
        );
    }
}

export default GiftCardContainer;