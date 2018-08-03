import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Wrapper from './style';
import { Button } from '../../ui';
import Header from '../Header';
import Main from '../Main';
import Footer from "../Footer";

class Book extends Component {
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
  todos: state.todos,
});

export default connect(mapStateToProps)(Book);
