import React, { Component } from "react";
import { Header, Footer } from "components";
import { Main } from "containers";

class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default Home;
