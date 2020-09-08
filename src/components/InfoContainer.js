import React from "react";
import InfoItem from "./InfoItem";
import point from "../images/point_icon.PNG";
import sun from "../images/sun_icon.PNG";
import ticket from "../images/ticket_image.PNG";

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
            icon={ticket}
            iconColor={"#bd9d5a"}
            linkText={"Bir sonrakini almaya ne dersin?"}
            link={"https://www.enuygun.com/ucak-bileti/gezgin/"}
          />
          <InfoItem
            beginText={"Sen tam bir"}
            endText={
              "insanısın! Seyahatlerini çoğunlukla bu mevsimde yapıyorsun."
            }
            textSelector={this.props.mostFlightSeason[0]}
            icon={iconSeason.icon}
            iconColor={iconSeason.iconColor}
            linkText={`${this.props.mostFlightSeason} mevsiminin en çok tercih edilen yerlerine göz at!`}
            link={"https://www.enuygun.com/galeri/kategori/turizm-tatil/"}
          />
          <InfoItem
            beginText={"Seninle birlikte tam"}
            endText={"farklı şehir gördük!"}
            textSelector={this.props.numberOfDifferentCities}
            icon={point}
            iconColor={"red"}
            linkText={"Yeni yerler keşfetme zamanı!"}
            link={"https://www.enuygun.com/bilgi/sehir-rehberi/"}
          />
        </div>
      </div>
    );
  }
}

export default InfoContainer;
