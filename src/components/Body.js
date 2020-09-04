import React from "react";
import TextView from "./TextView";
import InfoContainer from "./InfoContainer";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

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

//export default Body;

// redux storedan propsları elde et
const mapStateToProps = (state) => {
  console.log(state.user);
  return { user: state.user };
};

// componenti reduxa bağla
export default connect(mapStateToProps, { fetchUser })(Body);
