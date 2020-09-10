import React from "react";
import NavItem from "./NavItem";
import * as items from './navItems';
import { connect } from "react-redux";
import {
    fetchRecommendations,
    fetchDifferentDestinationsCount,
    fetchLastFlight,
    fetchSeason,
    fetchTransactionsCount,
    fetchUserInfo,
    spreadId } from "../actions";
import '../css/Navbar.css';

class Navbar extends React.Component {

    navItems = items.NAV_ITEMS;

    state = {
        activeIndex: "Sana Özel",
        userId: null
    };

    /* Nav item tıklandığında text içeriğini state'e ata */
    onItemClick = (value) => {
        this.setState({ activeIndex: value });
    };

    /* Searchbar'a girilen id değerini state'e ata */
    onInputChange = (e) => {
        this.setState({ userId: e.target.value });
    };

    /* Id sorgulama yapıldığında actions klasörü içindeki fetchUser
     * fonksiyonunu kullanarak sorgu yap */
    onSearch = (e) => {
        e.preventDefault();
        this.props.fetchRecommendations(this.state.userId);
        this.props.spreadId(this.state.userId);
        this.props.fetchUserInfo(this.state.userId);
        this.props.fetchTransactionsCount(this.state.userId);
        this.props.fetchSeason(this.state.userId);
        this.props.fetchLastFlight(this.state.userId);
        this.props.fetchDifferentDestinationsCount(this.state.userId);
    };

    renderedItems = () => this.navItems.map((navItem) => {

            /* Nav elemanına tıklandığında "active" yapılmasını sağlayan lojik */
            const active = this.state.activeIndex === navItem.value ? 'active' : null;

            return (
                <NavItem
                    handleClick={(e) => this.onItemClick(e.target.textContent)}
                    key={navItem.id}
                    value={navItem.value}
                    path={navItem.path}
                    classname={`${navItem.classname} ${active}`}>
                    <i style={{ pointerEvents: 'none' }} className={navItem.icon} />
                </NavItem>
            );
        }
    );

    render() {
        return (
            <div className="ui fluid container">
                <div className="ui stackable menu massive">
                    <div className="logo-container">
                        <span className="logo-text">
                            ENUYGUN
                        </span>
                    </div>
                    {
                        this.renderedItems() /* Nav items */
                    }
                    {/* Searchbar */}
                    <div className="right menu">
                        <div className="item">
                            <div className="ui transparent icon input">
                                <input
                                    type="text" placeholder="Kullanıcı id"
                                    onChange={this.onInputChange} />
                                <i  onClick={this.onSearch}
                                    className="search link icon"
                                    style={{ color: '#63BC47', marginRight: '1rem' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// redux storedan propsları elde et
const mapStateToProps = state => {
    console.log(state.user);
    return { user: state.user };
};

// componenti reduxa bağla
export default connect(
    mapStateToProps,
    {   fetchRecommendations,
        fetchDifferentDestinationsCount,
        fetchLastFlight,
        fetchSeason,
        fetchTransactionsCount,
        fetchUserInfo,
        spreadId }
)(Navbar);