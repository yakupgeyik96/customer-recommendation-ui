import React from "react";
import '../css/Recommendations.css';

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
                        <img className="card-image" src={this.props.imageLink} alt="rec_logo" />
                        <span
                            style={{ fontFamily: 'Balsamiq Sans', lineHeight: '1.2' }}>
                            {this.props.children}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardItem;