import React from "react";
import '../css/Recommendations.css';
import CardItem from "../components/CardItem";
import background from '../images/bg1.jpg';

class Recommendations extends React.Component {
    render() {
        return (
            <React.Fragment>

                {/*<div className="page-border-top"/>*/}
                <div
                    style={{ backgroundColor: '#63BC47', padding: '1rem', backgroundImage: `url(${background})` }}>
                    <div className="mycontainer">
                        <CardItem shadow="shadow">Fırsat 1</CardItem>
                        <CardItem shadow="shadow">Fırsat 2</CardItem>
                        <CardItem shadow="shadow">Fırsat 3</CardItem>
                    </div>
                </div>
                {/*<div className="page-border-bottom"/>*/}

            </React.Fragment>
        );
    }
}

export default Recommendations;