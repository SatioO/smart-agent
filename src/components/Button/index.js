import React from 'react';

export default class Button extends React.Component {
  render() {
    // const { children } = this.props;

    return (
      <div>
        <button name="prev" type="primary" title="Previous" id="button1">
          Previous
        </button>
        <br />
        <button name="next" type="primary" title="Next" id="button2">
          Next
        </button>
      </div>
    );
  }
}
