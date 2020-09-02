import React from "react";
import SliderInformation from "./SliderInformation";

class Slider extends React.Component {
  render() {
    return (
      /*<div class="ui center aligned container">
        <p>Slider</p>
      </div>
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">Customer Infromation Segment</h2>
        <p></p>
        <p></p>
      </div>*/
      <div className="ui grid center aligned container">
        <div className="twelve wide column"></div>
        <div className="twelve wide column">
          <p>
            <div className="ui raised very padded text container segment">
              <h2 className="ui header">Slider Slider Slider</h2>
              <SliderInformation />
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Slider;
