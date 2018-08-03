import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Wrapper from './style';
import { Button } from '../../ui';

class Book extends Component {
  componentWillMount() {}

  render() {
    return (
      //   <Wrapper>
      <div>
        <h1>Book Component</h1>
        <Button kind="primary">Hello world</Button>

        {/* //   </Wrapper> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Book);
