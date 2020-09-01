import React from "react";
import NavItem from "./NavItem";
import * as items from './navItems';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchUser} from "../actions";

class Navbar extends React.Component {

    navItems = items.NAV_ITEMS;

    state = {
        activeIndex: null,
        userId: null
    };

    onItemClick = (value) => {
        this.setState({ activeIndex: value });
    };

    onInputChange = (e) => {
        this.setState({ userId: e.target.value });
    };

    onSearch = (e) => {
        e.preventDefault();
        this.props.fetchUser(this.state.userId);
    };

    renderedItems = () => this.navItems.map((navItem) => {

            const active = this.state.activeIndex === navItem.value ? 'active' : null;

            return (
                <NavItem
                    handleClick={(e) => this.onItemClick(e.target.textContent)}
                    key={navItem.id}
                    value={navItem.value}
                    path={navItem.path}
                    classname={`${navItem.classname} ${active}`}>
                    <i className={navItem.icon} />
                </NavItem>
            );
        }
    );

    render() {
        return (
            <div className="ui container">
                <div className="ui stackable menu massive">
                    <Link className="item" to="/">
                    <span
                        style={{ color:'#63BC47', fontSize:'30px', fontWeight:'bold'}}>
                        ENUYGUN
                    </span>
                    </Link>
                    {
                        this.renderedItems()
                    }
                    <div className="right menu">
                        <div className="item">
                            <div className="ui transparent icon input">
                                <input
                                    type="text" placeholder="Kullanıcı id"
                                    onChange={this.onInputChange}/>
                                <i  onClick={this.onSearch}
                                    className="search link icon"
                                    style={{ color: '#63BC47' }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.user);
    return { user: state.user };
};

export default connect(
    mapStateToProps,
    { fetchUser }
)(Navbar);