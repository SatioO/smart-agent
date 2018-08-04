import "./index.scss";
import React, { PureComponent } from "react";
import { NavBar, Item, Dropdown } from "../Navigation";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import logo from "../../assets/images/logo_white_small.png";
import dummyUser from "../../assets/images/dummy-user.png";

export default class Header extends PureComponent {
    handleSearch = value => {
        console.log(value);
    };

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg p-0 no-gutters">
                    <div className="col">
                        <Logo src={logo} />
                        <SearchBar
                            value={t => this.handleSearch(t)}
                            placeholder="Search drafts, books, account etc."
                        />
                        <NavBar>
                            <Dropdown title="Your Books">
                                <Item to="">Book 1</Item>
                                <Item to="">Book 2</Item>
                            </Dropdown>
                            <Item to="">Subscriptions</Item>
                            <Item to="">Company</Item>
                            <Item to="">Support</Item>
                            <Item to="">Contact</Item>
                        </NavBar>
                    </div>
                    <div className="col-2">
                        <div className="user_wrap d-flex justify-content-end">
                            <div className="dropdown">
                                <div
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                >
                                    <div className="user_inner">
                                        <img src={dummyUser} alt="" />
                                        <span>Emiley</span>
                                    </div>
                                    <div className="icon_down">
                                        <i className="fas fa-chevron-down" />
                                    </div>
                                </div>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="">
                                        Link 1
                                    </a>
                                    <a className="dropdown-item" href="">
                                        Link 2
                                    </a>
                                    <a className="dropdown-item" href="">
                                        Link 3
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
