import React from "react";
import '../css/Recommendations.css';

class CardItem extends React.Component {
    render() {
        return (
            <div
                className={`myitem ${this.props.shadow} ${this.props.active}`}>
                <div style={{ textAlign: 'center' }}>
                    <div className="card-container">
                        <span style={{ fontFamily: 'Balsamiq Sans' }}>{this.props.children}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardItem;