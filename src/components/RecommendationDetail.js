import React from "react";
import '../css/RecommendationDetail.css'

class RecommendationDetail extends React.Component {

    render() {
        return (
            <div class="recomment-detail-container">
                <div className="recomment-detail-img">
                    <img className="rec-image" src={this.props.imageLink} alt="fırsat-logo" />
                </div>
                <div className="recomment-detail-content">
                    <span className="rec-detail-header">
                        {this.props.header}
                    </span>
                    <a className="rec-detail-text" href={this.props.redirectlink} target="_blank">
                        {this.props.detatil}
                    </a>
                </div>
            </div>
        );
    }
}

export default RecommendationDetail;