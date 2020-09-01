import React from "react";
import { Link } from "react-router-dom";

class NavItem extends React.Component {

    handleClick = e => {
        this.props.handleClick(e);
    };

    render() {

        return (
            <Link
                className={this.props.classname}
                to={this.props.path}
                onClick={ this.handleClick } >
                {this.props.children}
                <span>{this.props.value}</span>
            </Link>
        );
    }
}

export default NavItem;