import React from "react";
import { Title } from "../Title";
import { Image } from "../Image";

export default class Header extends React.Component {
    static Title = Title;
    static Image = Image;

    render() {
        const { children } = this.props;
        return <div>{children}</div>;
    }
}
