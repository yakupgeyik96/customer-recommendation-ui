import React from "react";
import TextView from "../components/TextView";
import InfoContainer from "../components/InfoContainer";
import { connect } from "react-redux";
import {
  fetchRecommendations,
  fetchDifferentDestinationsCount,
  fetchLastFlight,
  fetchSeason,
  fetchTransactionsCount,
  fetchUserInfo,
  spreadId,
} from "../actions";
import RecommendationError from "../components/RecommendationError";

const divStyle = {
  justifyContent: "center",
  padding: "5%",
  background: "linear-gradient(134.78deg,#2dc44d,#2dc44d 6.12%,#0087ff)",
};

class Body extends React.Component {
  renderedBodyItems = () => {
    return (
      this.props.userInfos &&
        this.props.lastFlight &&
        this.props.differentDestinationsCount &&
        this.props.transactionCount &&
        this.props.seasons ? (
        <div className="body-container" style={divStyle}>
          <TextView
            username={this.props.userInfos.name}
            lastFlightDate={this.props.lastFlight.departure}
            lastFlightOrigin={this.props.lastFlight.origin}
            lastFlightDestination={this.props.lastFlight.destination}
          />
          <InfoContainer
            amountOfTicket={
              this.props.transactionCount.transactions_count
            }
            mostFlightSeason={this.props.seasons[0]}
            numberOfDifferentCities={
              this.props.differentDestinationsCount.different_destinations_count
            }
          />
        </div>
      ) : (
        <RecommendationError />
      )
    );
  };

  render() {
    return <React.Fragment>{this.renderedBodyItems()}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  if (state.user) {
    return {
      user: state.user,
      lastFlight: state.user.lastflight,
      seasons: state.user.seasons,
      differentDestinationsCount: state.user.differentdestinationcount,
      transactionCount: state.user.transactionscount,
      userInfos: state.user.userInfos,
      id: state.user.id,
    };
  }
};

export default connect(mapStateToProps, {
  fetchRecommendations,
  fetchDifferentDestinationsCount,
  fetchLastFlight,
  fetchSeason,
  fetchTransactionsCount,
  fetchUserInfo,
  spreadId,
})(Body);
