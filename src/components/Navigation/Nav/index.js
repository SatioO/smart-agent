import React, { PureComponent } from "react";

export default class NavBar extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <div className="navbar_wrap">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">{children}</ul>
                </div>
            </div>
        );
    }
}
