import React from "react";
import '../css/Recommendations.css';
import CardItem from "../components/CardItem";
import background from '../images/bg1.jpg';

class Recommendations extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div
                    style={{ backgroundColor: '#63BC47', backgroundImage: `url(${background})` }}>
                    <div className="mycontainer">
                        <CardItem>Fırsat 1</CardItem>
                        <CardItem>Fırsat 2</CardItem>
                        <CardItem>Fırsat 3</CardItem>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Recommendations;