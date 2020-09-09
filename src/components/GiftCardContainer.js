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
                    content={this.props.title}
                    imageLink={this.props.imageLink}
                    link={this.props.redirectLink}
                    linkText={this.props.description} />

                <GiftCardItem
                    content={this.props.giftTitle}
                    imageLink={this.props.giftImageLink}
                    link={this.props.giftRedirectLink}
                    linkText={this.props.giftDescription}/>
            </div>
        );
    }
}

export default GiftCardContainer;