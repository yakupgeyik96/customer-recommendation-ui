import React from "react";

class SliderInformation extends React.Component {
  render() {
    return (
      <div className="ui grid center aligned container">
        <div className="ui statistics">
          <div className="statistic">
            <div class="value">22</div>
            <div class="label">Saves</div>
          </div>
          <div class="statistic">
            <div class="text value">
              Three
              <br />
              Tickets
            </div>
            <div class="label">from ENUYGUN</div>
          </div>
          <div class="statistic">
            <div class="value">
              <i class="plane icon"></i> 5
            </div>
            <div class="label">Flights</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderInformation;
