import "./index.scss";
import React, { PureComponent } from "react";
import { NavBar, Item, Dropdown } from "../Navigation";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import { UserWidget, Option } from "../UserWidget";
import logo from "assets/images/logo_white_small.png";
import avatar from "assets/images/dummy-user.png";

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
                        <UserWidget name="Emiley" avatar={avatar}>
                            <Option to="">Link 1</Option>
                            <Option to="">Link 2</Option>
                            <Option to="">Link 3</Option>
                        </UserWidget>
                    </div>
                </nav>
            </header>
        );
    }
}
