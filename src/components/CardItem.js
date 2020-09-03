import React from "react";
import '../css/Recommendations.css';
import cardImage from '../images/bg1.jpg';

class CardItem extends React.Component {

    onCardClick = (event) => {
        this.props.handleCardClick(event);
    }

    render() {
        return (
            <div onClick={this.onCardClick}
                 className={`myitem ${this.props.shadow} ${this.props.active}`}>
                <div style={{ textAlign: 'center' }}>
                    <div className="card-container">
                        <img className="card-image" src={cardImage} alt="rec_logo" />
                        <span style={{ fontFamily: 'Balsamiq Sans' }}>{this.props.children}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardItem;