import React from "react";
import "../css/Recommendations.css";
import CardItem from "../components/CardItem";
import background from "../images/plane_bg.jpg";
import { connect } from "react-redux";
import { fetchRecommendations } from "../actions";
import RecommendationError from "../components/RecommendationError";
import RecommendationDetail from "../components/RecommendationDetail";
import ConcessionCard from "../components/ConcessionCard";
import GiftCardContainer from "../components/GiftCardContainer";

class Recommendations extends React.Component {
  giftCardTitle = "Kişiselleştirilmiş Hediye Kart'a %10 indirim";
  giftCardDescription =
    "Sevdiklerine verebileceğin en güzel hediye deneyimlerden başka ne olabilir? Tüm havayollarında 1 yıl boyunca kullanabileceğin uçak bileti hediye kartını %10 indirimle almak için tıkla!";
  giftImageLink =
    "https://www.business.com/images/content/5ca/3d59a5a215e8a458b8199/0-800-";
  giftLink = "https://www.enuygun.com/enuygun-hediye-kart/";

  componentWillMount() {
    if (this.props) {
      this.props.fetchRecommendations(this.props.id);
    }
  }


  state = {
    currentRecommendation: this.props.recommendations
      ? this.props.recommendations[0].title
      : null,
  };

  onCardClick = (event) => {
    this.setState({
      currentRecommendation: event.target.parentNode.textContent,
    });
  };

  renderConcessionCard = () => {
    if (this.props.recommendations[0].cluster.includes("az")) {
      return <ConcessionCard concession="%5" />;
    } else if (this.props.recommendations[0].cluster.includes("orta")) {
      return <ConcessionCard concession="%10" />;
    } else if (this.props.recommendations[0].cluster.includes("zengin")) {
      return <ConcessionCard concession="%10" score="Zengin" />;
    } else {
      return <ConcessionCard concession="%15" />;
    }
  };

  renderPrivatizedGifts = () => {
    if (this.props.recommendations) {
      if (this.props.recommendations[0].cluster === "genczengin") {
        return (
          <GiftCardContainer
            redirectLink="https://www.enuygun.com/otel/"
            imageLink="https://cdn3.enuygun.com/media/lib/1x1080/uploads/image/rixos-downtown-antalya-genel-39090154.webp"
            title="En iyi tatil ve şehir otellerini en uygun fiyatlarla bulun!"
            description="Gideceğin yerdeki en iyi tatil ve şehir otellerini en uygun fiyatlarla bulmak için tıkla!"
            giftTitle={this.giftCardTitle}
            giftImageLink={this.giftImageLink}
            giftDescription={this.giftCardDescription}
            giftRedirectLink={this.giftLink}
          />
        );
      } else if (this.props.recommendations[0].cluster === "yetzengin") {
        return (
          <GiftCardContainer
            redirectLink="https://www.enuygun.com/sigorta/"
            imageLink="https://cdn.enuygun.com/sigorta/v-9c732/static/og-image.jpg"
            title="ENUYGUN Sigorta Teklifleri"
            description="İhtiyacına en uygun sigorta tekliflerini, daha düşük prim ödeyip kazançlı çıkacağın farklı sigorta firmalarından karşılaştırarak almak için tıkla!"
            giftTitle={this.giftCardTitle}
            giftImageLink={this.giftImageLink}
            giftDescription={this.giftCardDescription}
            giftRedirectLink={this.giftLink}
          />
        );
      } else if (this.props.recommendations[0].cluster === "yaslizengin") {
        return (
          <GiftCardContainer
            redirectLink="https://www.enuygun.com/sigorta/saglik-sigortasi/"
            imageLink="https://cdn.enuygun.com/sigorta/v-9c732/static/jumbotron/saglik.jpg"
            title="Özel Sağlık Sigortası"
            description="İhtiyacına en uygun sağlık sigortasını, daha düşük prim ödeyip kazançlı çıkacağın farklı sigorta firmalarından karşılaştırarak almak için tıkla!"
            giftTitle={this.giftCardTitle}
            giftImageLink={this.giftImageLink}
            giftDescription={this.giftCardDescription}
            giftRedirectLink={this.giftLink}
          />
        );
      }
    }
  };

  renderedCardItems = () => {
    return this.props.recommendations ? (
      <React.Fragment>
        {this.props.recommendations ? this.renderConcessionCard() : null}
        <div
          className="mycontainer-bg"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mycontainer">
            {
              this.props.recommendations.map((recommendation) => {
                const active =
                  this.state.currentRecommendation === recommendation.title
                    ? "myitem-active"
                    : null;

                return (
                  <CardItem
                    active={active}
                    imageLink={recommendation.image_url}
                    handleCardClick={this.onCardClick}
                  >
                    {recommendation.title}
                  </CardItem>
                );
              })
            }
          </div>
        </div>
        {
          this.props.recommendations.map((recommend) => {
            if (this.state.currentRecommendation === recommend.title) {
              return (
                <RecommendationDetail
                  header={recommend.title}
                  detatil={recommend.description}
                  imageLink={recommend.image_url}
                  redirectlink={recommend.recommendation_url}
                />
              );
            } else {
              return null;
            }
          })
        }
        {this.renderPrivatizedGifts()}
      </React.Fragment>
    ) : (
      <RecommendationError />
    );
  };

  render() {
    return <React.Fragment>{this.renderedCardItems()}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  if (state.user) {
    return {
      id: state.user.id,
      recommendations: state.user.recommendations,
    };
  }
};

export default connect(mapStateToProps, { fetchRecommendations })(
  Recommendations
);
