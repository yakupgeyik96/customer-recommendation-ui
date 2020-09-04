import React from 'react';
import '../css/RecommendationError.css'

class RecommendationError extends React.Component {
    render() {
        return (
            <div className="alert-message-container">
                <div className="alert-message">
                    <span className="alert-text">Lütfen kullanıcı sorgusu yapınız</span>
                </div>
            </div>
        );
    }
}

export default RecommendationError;