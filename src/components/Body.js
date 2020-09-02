import React from "react";
import TextView from "./TextView";
import InfoContainer from "./InfoContainer";

const divStyle = {
  justifyContent: "center",
  margin: "5% auto",
};

class Body extends React.Component {
  render() {
    return (
      <div className="body-container" style={divStyle}>
        <TextView />
        <InfoContainer />
      </div>
    );
  }
}

export default Body;
