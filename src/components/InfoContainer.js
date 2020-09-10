import React from "react";
import InfoItem from "./InfoItem";
import * as texts from "../configurations/stringConfig";
import point from "../images/point_icon.PNG";
import sun from "../images/sun_icon.PNG";
import ticket from "../images/ticket_image.PNG";
import leaf from "../images/leaf.PNG";
import snowflake from "../images/snowflake.PNG";
import tree from "../images/tree.PNG";

/**
 *  props'tan gelen mevsime göre UI'da gösterilecek icon ve onun rengini belirleyen function
 */
class InfoContainer extends React.Component {
  iconChangeForSeason = (season) => {
    console.log(season);
    switch (season) {
      case "summer":
        return {
          icon: sun,
          iconColor: "orange",
        };
      case "autumn":
        return {
          icon: leaf,
          iconColor: "brown",
        };
      case "spring":
        return {
          icon: tree,
          iconColor: "green",
        };
      case "winter":
        return {
          icon: snowflake,
          iconColor: "grey",
        };
    }
  };

  translatedSeason = () => {
    if (this.props.mostFlightSeason === "winter") {
      return ["kış", "Kış"];
    } else if (this.props.mostFlightSeason === "autumn") {
      return ["sonbahar", "Sonbahar"];
    } else if (this.props.mostFlightSeason === "summer") {
      return ["yaz", "Yaz"];
    } else {
      return ["ilkbahar", "İlkbahar"];
    }
  };

  render() {
    console.log("---->", this.props);
    const iconSeason = this.iconChangeForSeason(this.props.mostFlightSeason);
    console.log(iconSeason);
    const infoItemTexts = texts.BODY_TEXTS;
    console.log(infoItemTexts[0]);
    return (
      <div className="ui raised very padded text container segment">
        <div className="ui divided items">
          {/* alınan bilet sayısını gösteren kısım */}
          <InfoItem
            beginText={infoItemTexts[0].beginText}
            endText={infoItemTexts[0].endText}
            textSelector={this.props.amountOfTicket}
            icon={ticket}
            iconColor={"#bd9d5a"}
            linkText={infoItemTexts[0].linkText}
            link={infoItemTexts[0].link}
          />
          {/* en çok hangi mevsimde seyahat ettiğini gösteren kısım */}
          <InfoItem
            beginText={infoItemTexts[1].beginText}
            endText={infoItemTexts[1].endText}
            textSelector={this.translatedSeason()[0]}
            icon={iconSeason.icon}
            iconColor={iconSeason.iconColor}
            linkText={`${this.translatedSeason()[1]} ${
              infoItemTexts[1].linkText
            }`}
            link={infoItemTexts[1].link}
          />
          {/* kaç farklı şehir gezdiğini gösteren kısım */}
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
