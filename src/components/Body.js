import React from "react";
import TextView from "./TextView";
import InfoContainer from "./InfoContainer";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import RecommendationError from "../components/RecommendationError";

const divStyle = {
    justifyContent: "center",
    margin: "5% auto",
};

class Body extends React.Component {
    /* componentwillmount ile profil sayfasında sorgusu
          yapılan id ile kullanıcı ve öneri sorgusu yap */
    componentDidMount() {
        if (this.props) {
            this.props.fetchUser(this.props.id);
        }
    }

    /* sorgu yapıldıysa ilk öneriyi state'e ata yoksa null ata. */
    /*state = {
      name: this.props.user.user.name ? this.props.user.user.name : "",
      lastFlightDate: this.props.user.user.lastFlightDate
        ? this.props.user.user.lastFlightDate
        : "",
      lastFlightLocation: this.props.user.user.lastFlightLocation
        ? this.props.user.user.lastFlightLocation
        : "",
    }; */


  renderedBodyItems = () => {
    if (this.props.user.user) {
      return (
        <div className="body-container" style={divStyle}>
          <TextView
            username={this.props.user.user.name}
            lastFlightDate={this.props.user.user.lastFlightDate}
            lastFlightLocation={this.props.user.user.lastFlightLocation}
          />
          <InfoContainer
            amountOfTicket={this.props.user.user.amountOfTicket}
            mostFlightSeason={this.props.user.user.mostFlightSeason}
            numberOfDifferentCities={
              this.props.user.user.numberOfDifferentCities
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
        return { user: state.user };
    }
};

// componenti reduxa bağla
export default connect(mapStateToProps, { fetchUser })(Body);