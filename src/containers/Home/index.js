import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Footer } from "../../components";
import Main from "../Main";

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

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(Home);
