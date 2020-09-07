import React from "react";
import '../css/Recommendations.css';
import CardItem from "../components/CardItem";
import background from '../images/plane_bg.jpg';
import { connect } from "react-redux";
import { fetchRecommend, fetchUser } from '../actions'
import RecommendationError from "../components/RecommendationError";
import RecommendationDetail from "../components/RecommendationDetail";
import ConcessionCard from "../components/ConcessionCard";

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
    state = { currentRecommendation: this.props.recomments ? this.props.recomments[0].header : null };

    onCardClick = (event) => {
        this.setState({ currentRecommendation: event.target.parentNode.textContent });
        console.log(event.target.parentNode.textContent); /* CardItem tıklandığında önerile metnini state'a ata */
    };

    renderConcessionCard = () => {
        if (this.props.user.segment === "Az") {
            return <ConcessionCard concession="%5" />
        } else if (this.props.user.segment === "Orta") {
            return <ConcessionCard concession="%10" />
        } else {
            return <ConcessionCard concession="%15" />
        }
    }

    renderedCardItems = () => {
        console.log("user =====> ", this.props.user);
        return (
            this.props.recomments ?
                <React.Fragment>
                    {this.props.user ? this.renderConcessionCard() : null}
                    <div className="mycontainer-bg" style={{
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div className="mycontainer">
                            { /* öneriler dizisindeki değerleri map ile
                                carditem'a gönder */
                                this.props.recomments.map((recommendation) => {
                                    console.log(recommendation);
                                    const active = this.state.currentRecommendation === recommendation.header ? 'myitem-active' : null;

                                    return (
                                        <CardItem
                                            active={active}
                                            handleCardClick={this.onCardClick}>
                                            {recommendation.header}
                                        </CardItem>
                                    );
                                })
                            }
                        </div>
                    </div>
                    {
                        // tıklanan öneriyi kontrol et. Ona ait öneri detayını ekrana bas
                        this.props.recomments.map((recommend) => {
                            if (this.state.currentRecommendation === recommend.header) {
                                return (
                                    <RecommendationDetail
                                        header={recommend.header}
                                        detatil={recommend.content} />
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                    <div id="insurances">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, assumenda eaque et eum harum iusto laboriosam libero nihil non perferendis placeat praesentium quam quia quidem quo repellat velit voluptatem voluptatum! Ab consequuntur culpa ducimus earum est fugit laborum laudantium molestias nulla obcaecati possimus provident quasi quis repellendus saepe, voluptatem voluptates?
                        </p>
                    </div>
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
            recomments: state.user.recomments,
            id: state.user.id,
            user: state.user.user
        };
    }
};

export default connect(
    mapStateToProps,
    { fetchRecommend, fetchUser }
)(Recommendations);