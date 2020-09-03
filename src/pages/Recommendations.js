import React from "react";
import '../css/Recommendations.css';
import CardItem from "../components/CardItem";
import background from '../images/bg1.jpg';
import { connect } from "react-redux";
import { fetchRecommend, fetchUser } from '../actions'
import RecommendationError from "../components/RecommendationError";

class Recommendations extends React.Component {

    /* componentwillmount ile profil sayfasında sorgusu
        yapılan id ile kullanıcı ve öneri sorgusu yap */
    componentWillMount() {
        if (this.props) {
            this.props.fetchRecommend(this.props.id);
            this.props.fetchUser(this.props.id);
        }
    }

    /* sorgu yapıldıysa ilk öneriyi state'e ata yoksa null ata. */
    state = { currentRecommendation: this.props.recomments ? this.props.recomments[0] : null };

    onCardClick = (event) => {
        this.setState({ currentRecommendation: event.target.parentNode.textContent });
        console.log(event.target.parentNode.textContent); /* CardItem tıklandığında önerile metnini state'a ata */
    };

    renderedCardItems = () => {
        console.log("state =====> ", this.state.currentRecommendation);
        return (
            this.props.recomments ?
                this.props.recomments.map((recommendation) => {
                    const active = this.state.currentRecommendation === recommendation ? 'myitem-active' : null;

                    return (
                        <CardItem
                            active={active}
                            handleCardClick={this.onCardClick}>
                            {recommendation}
                        </CardItem>
                    );
                })
                : <RecommendationError />
        );
    }

    render() {
        return (
            <React.Fragment>
                <div
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="mycontainer">
                        { /* öneriler dizisindeki değerleri map ile
                            carditem'a gönder */
                            this.renderedCardItems()
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// redux storedan propsları elde et
const mapStateToProps = state => {
    if (state.user) {
        return { recomments: state.user.recomments, id: state.user.id };
    }
};

export default connect(
    mapStateToProps,
    { fetchRecommend, fetchUser }
)(Recommendations);