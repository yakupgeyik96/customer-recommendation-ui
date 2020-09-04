import React from "react";
import '../css/RecommendationDetail.css'
import bg from '../images/bg1.jpg';

class RecommendationDetail extends React.Component {

    render() {
        return (
            <div class="recomment-detail-container">
                <div className="recomment-detail-img">
                    <img className="rec-image" src={bg} alt="fırsat-logo" />
                </div>
                <div className="recomment-detail-content">
                    <span className="rec-detail-header">
                        {this.props.header}
                    </span>
                    <p className="rec-detail-text">
                        {this.props.detatil}
                    </p>
                </div>
            </div>
        );
    }
}

export default RecommendationDetail;