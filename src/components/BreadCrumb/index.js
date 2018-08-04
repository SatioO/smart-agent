import React, { Component } from "react";
import Item from "./Item";

export default class BreadCrumb extends Component {
    static Item = Item;
    render() {
        return (
            <div className="breadcrumb_wrap">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent pl-0 pt-1 pb-1 mb-2">
                        {this.props.children}
                    </ol>
                </nav>
            </div>
        );
    }
}
