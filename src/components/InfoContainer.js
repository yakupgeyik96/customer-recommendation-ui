import React from "react";
import InfoItem from "./InfoItem";

class InfoContainer extends React.Component {
  iconChangeForSeason = (props) => {
    const season = props.mostFlightSeason;
    switch (season) {
      case "Yaz":
        return {
          icon: "sun icon",
          iconColor: "orange",
        };
      case "Sonbahar":
        return {
          icon: "umbrella icon",
          iconColor: "brown",
        };
      case "İlkbahar":
        return {
          icon: "tree icon",
          iconColor: "green",
        };
      case "Kış":
        return {
          icon: "snowflake icon",
          iconColor: "grey",
        };
    }
  };

  render() {
    const iconSeason = this.iconChangeForSeason(this.props);
    console.log(iconSeason);
    return (
      <div className="ui raised very padded text container segment">
        <div className="ui divided items">
          <InfoItem
            beginText={"Bizden bu zamana kadar tam"}
            endText={"bilet aldın!"}
            textSelector={this.props.amountOfTicket}
            icon={"ticket alternate icon"}
            iconColor={"#bd9d5a"}
            linkText={"Bir sonrakini almaya ne dersin?"}
            link={"https://www.enuygun.com/ucak-bileti/gezgin/"}
          />
          <InfoItem
            beginText={"Sen tam bir"}
            endText={
              "insanısın! Seyahatlerini çoğunlukla bu mevsimde yapıyorsun."
            }
            textSelector={this.props.mostFlightSeason}
            icon={iconSeason.icon}
            iconColor={iconSeason.iconColor}
            linkText={`${this.props.mostFlightSeason} mevsiminin en çok tercih edilen yerlerine göz at!`}
            link={"https://www.enuygun.com/ucak-bileti/gezgin/"}
          />
          <InfoItem
            beginText={"Seninle birlikte tam"}
            endText={"farklı şehir gördük!"}
            textSelector={this.props.numberOfDifferentCities}
            icon={"map marker icon"}
            iconColor={"red"}
            linkText={"Yeni yerler keşfetme zamanı!"}
            link={"https://www.enuygun.com/ucak-bileti/gezgin/"}
          />
        </div>
      </div>
    );
  }
}

export default InfoContainer;
