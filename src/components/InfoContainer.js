import React from "react";
import InfoItem from "./InfoItem";

class InfoContainer extends React.Component {
  render() {
    return (
      <div className="ui raised very padded text container segment">
        <InfoItem />
        <InfoItem />
      </div>
    );
  }
}

export default InfoContainer;
