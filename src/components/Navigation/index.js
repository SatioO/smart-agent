import React, { PureComponent } from "react";

export default class Navigation extends PureComponent {
    render() {
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
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href=""
                                id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Your Books{" "}
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a className="dropdown-item" href="">
                                    Book 1
                                </a>
                                <a className="dropdown-item" href="">
                                    Book 2
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                Subscriptions
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                Company
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                Support
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
