import React, { Component } from "react";
import { Header } from "../../components";

export default class Home extends Component {
    render() {
        return (
            <Header>
                <Header.Title>Sample Image</Header.Title>
                <Header.Image
                    width={500}
                    height={400}
                    path="https://www.vanseodesign.com/blog/demo/responsive-images/images/800px/vegetables-800.jpg"
                />
            </Header>
        );
    }
}
