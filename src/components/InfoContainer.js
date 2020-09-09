import React from "react";
import InfoItem from "./InfoItem";
import * as texts from "./stringConfig";
import point from "../images/point_icon.PNG";
import sun from "../images/sun_icon.PNG";
import ticket from "../images/ticket_image.PNG";
import leaf from "../images/leaf.PNG";
import snowflake from "../images/snowflake.PNG";
import tree from "../images/tree.PNG";

class InfoContainer extends React.Component {
  iconChangeForSeason = (props) => {
    const season = props.mostFlightSeason[0];
    console.log(season);
    switch (season) {
      case "Yaz":
        return {
          icon: sun,
          iconColor: "orange",
        };
      case "Sonbahar":
        return {
          icon: leaf,
          iconColor: "brown",
        };
      case "İlkbahar":
        return {
          icon: tree,
          iconColor: "green",
        };
      case "Kış":
        return {
          icon: snowflake,
          iconColor: "grey",
        };
    }
  };

  render() {
    const iconSeason = this.iconChangeForSeason(this.props);
    console.log(iconSeason);
    const infoItemTexts = texts.BODY_TEXTS;
    console.log(infoItemTexts[0]);
    return (
      <div className="ui raised very padded text container segment">
        <div className="ui divided items">
          <InfoItem
            beginText={infoItemTexts[0].beginText}
            endText={infoItemTexts[0].endText}
            textSelector={this.props.amountOfTicket}
            icon={ticket}
            iconColor={"#bd9d5a"}
            linkText={infoItemTexts[0].linkText}
            link={infoItemTexts[0].link}
          />
          <InfoItem
            beginText={infoItemTexts[1].beginText}
            endText={infoItemTexts[1].endText}
            textSelector={this.props.mostFlightSeason[0]}
            icon={iconSeason.icon}
            iconColor={iconSeason.iconColor}
            linkText={`${this.props.mostFlightSeason[0]} ${infoItemTexts[1].linkText}`}
            link={infoItemTexts[1].link}
          />
          <InfoItem
            beginText={infoItemTexts[2].beginText}
            endText={infoItemTexts[2].endText}
            textSelector={this.props.numberOfDifferentCities}
            icon={point}
            iconColor={"red"}
            linkText={infoItemTexts[2].linkText}
            link={infoItemTexts[2].link}
          />
        </div>
      </div>
    );
  }
}

export default InfoContainer;
