import React, { Component } from "react";
import { connect } from "react-redux";
import { SAMPLE_QUERY } from "../../queries";
import { theme } from "../../theme";
import Wrapper from "./style";

class Book extends Component {
    componentWillMount() {}

    render() {
        return (
            <Wrapper theme={theme}>
                <h1>Book Component</h1>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(Book);
