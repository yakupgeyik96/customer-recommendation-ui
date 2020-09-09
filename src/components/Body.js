import React from "react";
import TextView from "./TextView";
import InfoContainer from "./InfoContainer";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import RecommendationError from "../components/RecommendationError";

const divStyle = {
  justifyContent: "center",
  padding: "5%",
  background: "linear-gradient(134.78deg,#2dc44d,#2dc44d 6.12%,#0087ff)",
};

class Body extends React.Component {
  /* componentwillmount ile profil sayfasında sorgusu
          yapılan id ile kullanıcı ve öneri sorgusu yap */
  componentDidMount() {
    if (this.props) {
      this.props.fetchUser(1); //this.props.id)
    }
  }

  renderedBodyItems = () => {
    if (this.props.data.user) {
      return (
        <div className="body-container" style={divStyle}>
          <TextView
            username={this.props.data.user.name}
            lastFlightDate={this.props.data.user.lastFlightDate}
            lastFlightLocation={this.props.data.user.lastFlightLocation}
          />
          <InfoContainer
            amountOfTicket={this.props.data.user.amountOfTicket}
            mostFlightSeason={this.props.data.user.mostFlightSeason}
            numberOfDifferentCities={
              this.props.data.user.numberOfDifferentCities
            }
          />
        </div>
      );
    } else {
      return <RecommendationError />;
    }
  };

  render() {
    return <React.Fragment>{this.renderedBodyItems()}</React.Fragment>;
  }
}

// redux storedan propsları elde et
const mapStateToProps = (state) => {
  if (state.user) {
    console.log(state.user);
    return { data: state.user,
        lastflight: state.user.lastflight };
  } //state.data
};

// componenti reduxa bağla
export default connect(mapStateToProps, { fetchUser })(Body);
