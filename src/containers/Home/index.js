
import './index.scss';
import React, { Component } from 'react';
import { Header } from '../../components';
import { Footer } from '../../components';
import { Button } from '../../components';
import { BookCover } from '../../components';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          {/* <Header.Title>Sample Image</Header.Title>
          <Header.Image
            width={500}
            height={400}
            path="https://www.vanseodesign.com/blog/demo/responsive-images/images/800px/vegetables-800.jpg"
          /> */}
        </Header>

        <Button>
          <h3> This is a button </h3>
        </Button>

        <div>
          <BookCover>
            <h4> This is main window of book cover </h4>
          </BookCover>
        </div>

        <Footer>
          <h2> This is footer </h2>
        </Footer>
      </div>
    );
  }
}
