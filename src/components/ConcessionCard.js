import React from "react";
import '../css/ConcessionCard.css';

class ConcessionCard extends React.Component {

    renderConcessionAndInsurance = () => {
        return (
            <div className="ui buttons massive" style={{ boxShadow:'0 0 10px 5px gray'}}>
                <button className="ui positive button">{`Tüm fırsatlara ${this.props.concession} indirimle sahip olun`}</button>
                <div className="or" data-text="ve"/>
                <button className="ui positive button">
                    <a href="#privatized-gifts" style={{color: 'white'}}>Size özel hediye kartlarını görün</a>
                </button>
            </div>
        );
    }

    renderOnlyConcession = () => {
        return (
            <button className="ui positive button massive concession-card">
                {`Tüm fırsatlar ${this.props.concession} indirimli`}
            </button>
        );
    }

    render() {
        /*<div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="concession-card-container">
                    <span className="concession-card-text">{`Tüm fırsatlar ${this.props.concession} indirimli`}</span>
                </div>
            </div>*/
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