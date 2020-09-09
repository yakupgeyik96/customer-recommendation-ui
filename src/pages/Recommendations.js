import React from "react";
import '../css/Recommendations.css';
import CardItem from "../components/CardItem";
import background from '../images/plane_bg.jpg';
import { connect } from "react-redux";
import { fetchRecommendations } from '../actions'
import RecommendationError from "../components/RecommendationError";
import RecommendationDetail from "../components/RecommendationDetail";
import ConcessionCard from "../components/ConcessionCard";
import GiftCardContainer from "../components/GiftCardContainer";

class Recommendations extends React.Component {

    giftCardTitle = "Hediye Kart'a %10 indirim";
    giftCardDescription = "Sevdiklerine verebileceğin en güzel hediye deneyimlerden başka ne olabilir? Tüm havayollarında 1 yıl boyunca kullanabileceğin uçak bileti hediye kartını %10 indirimle almak için tıkla!"
    giftImageLink = "https://www.business.com/images/content/5ca/3d59a5a215e8a458b8199/0-800-";
    giftLink = "https://www.enuygun.com/enuygun-hediye-kart/";
    /* componentwillmount ile profil sayfasında sorgusu
        yapılan id ile kullanıcı ve öneri sorgusu yap */
    componentWillMount() {
        if (this.props) {
            this.props.fetchRecommendations(this.props.id);
        }
    }

    /* sorgu yapıldıysa ilk öneriyi state'e ata yoksa null ata. */
    state = { currentRecommendation: this.props.recommendations ? this.props.recommendations[0].title : null };

    onCardClick = (event) => {
        this.setState({ currentRecommendation: event.target.parentNode.textContent }); /* CardItem tıklandığında önerile metnini state'a ata */
    };

    /* Sayfanın üst kısmında kişiye özel gösterilecek olan indirim uyarısının ekrana
    * basılmasını sağlayan fonksiyon */
    renderConcessionCard = () => {
        if (this.props.recommendations[0].cluster.includes("az")) {
            return <ConcessionCard concession="%5" />
        }
        else if (this.props.recommendations[0].cluster.includes("orta")) {
            return <ConcessionCard concession="%10" />
        }
        else if (this.props.recommendations[0].cluster.includes("zengin")) {
            return <ConcessionCard concession="%10" score="Zengin" />
        }
        else {
            return <ConcessionCard concession="%15" />
        }
    }

    /* Kullanıcının kümesinin genczengin, yetiskinzengin ya da yaslizengin olmasına göre
    *  gösterilecek olan otel, sigorta, ya da  sağlık sigortasıının kontrolünü yapan
    *  fonksiyon */
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
                        giftDescription= {this.giftCardDescription}
                        giftRedirectLink={this.giftLink} />
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
                        giftDescription= {this.giftCardDescription}
                        giftRedirectLink={this.giftLink} />
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
                        giftDescription= {this.giftCardDescription}
                        giftRedirectLink={this.giftLink} />
                );
            }
        }
    }

    /* Öneriler api'den başarılı şekilde alındıysa
        1) ilgili indirim uyarısını sayfada göster
        2) öneriler dizisini map fonksiyonu ile dolaşarak, gerekli parametreleri alıp öneri kartlarını ekrana bas
        3) aynı şekilde gerekli parametreleri alarak öneri detaylarını ekrana bas
        4) Eğer sorgu yapılmadıysa ekrana uyarı ver. */
    renderedCardItems = () => {
        return (
            this.props.recommendations ?
                <React.Fragment>
                    {this.props.recommendations ? this.renderConcessionCard() : null}
                    <div className="mycontainer-bg" style={{
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div className="mycontainer">
                            { /* öneriler dizisindeki değerleri map ile
                                carditem'a gönder */
                                this.props.recommendations.map((recommendation) => {
                                    const active = this.state.currentRecommendation === recommendation.title ? 'myitem-active' : null;

                                    return (
                                        <CardItem
                                            active={active}
                                            imageLink={recommendation.image_url}
                                            handleCardClick={this.onCardClick}>
                                            {recommendation.title}
                                        </CardItem>
                                    );
                                })
                            }
                        </div>
                    </div>
                    {
                        // tıklanan öneriyi kontrol et. Ona ait öneri detayını ekrana bas
                        this.props.recommendations.map((recommend) => {
                            if (this.state.currentRecommendation === recommend.title) {
                                return ( <RecommendationDetail
                                            header={recommend.title}
                                            detatil={recommend.description}
                                            imageLink={recommend.image_url}
                                            redirectlink={recommend.recommendation_url} />
                                )
                            }
                            else {
                                return null;
                            }
                        })
                    }
                    {this.renderPrivatizedGifts()}
                </React.Fragment>
            : <RecommendationError />
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.renderedCardItems()}
            </React.Fragment>
        );
    }
}

// redux storedan propsları elde et
const mapStateToProps = state => {
    if (state.user) {
        return {
            id: state.user.id,
            recommendations: state.user.recommendations
        };
    }
};

export default connect(
    mapStateToProps,
    { fetchRecommendations }
)(Recommendations);