import React from "react";
import NavItem from "./NavItem";
import * as items from './navItems';
import {Link} from "react-router-dom";

class Navbar extends React.Component {

    navItems = items.NAV_ITEMS;

    state = { activeIndex: null };

    onItemClick = (value) => {
        this.setState({ activeIndex: value });
    };

    renderedItems = () => this.navItems.map((navItem) => {

            const active = this.state.activeIndex === navItem.value ? 'active' : null;

            return (
                <NavItem
                    handleClick={(e) => this.onItemClick(e.target.textContent)}
                    key={navItem.id}
                    value={navItem.value}
                    path={navItem.path}
                    classname={`${navItem.classname} ${active}`}
                    icon={navItem.icon}
                />
            );
        }
    );

    render() {
        const classs = "ui compact stackable large labeled icon secondary pointing five item menu";
        return (
            <div className="ui compact stackable menu five item labeled icon huge">
                <Link
                    className="item"
                    to="/">
                    <h2 style={{ color:'green', fontSize:'30px'}}>ENUYGUN</h2>
                </Link>
                {
                    this.renderedItems()
                }
            </div>
        );
    }
}

export default Navbar;