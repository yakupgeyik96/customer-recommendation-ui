import React from "react";
import '../css/ConcessionCard.css';

class ConcessionCard extends React.Component {

    renderConcessionAndInsurance = () => {
        return (
            <div className="ui buttons massive" style={{ boxShadow:'0 0 10px 5px gray'}}>
                <button className="ui positive button">{`Size özel önerilen temalara ${this.props.concession} indirimle sahip olun`}</button>
                <div className="or" data-text="ve"/>
                <button className="ui positive button">
                    <a href="#privatized-gifts" style={{color: 'white'}}>Size özel ürün fırsatlarını yakalayın</a>
                </button>
            </div>
        );
    }

    renderOnlyConcession = () => {
        return (
            <button className="ui positive button massive concession-card">
                {`Size özel önerilen temalara ${this.props.concession} indirimle sahip olun`}
            </button>
        );
    }

    render() {
        return (
            <div className="concession-card-container">
                {
                    this.props.score ? this.renderConcessionAndInsurance() : this.renderOnlyConcession()
                }
            </div>
        );
    }
}

export default ConcessionCard;