import React from 'react';
// import { Title } from '../Title';
// import { Image } from '../Image';

export default class Header extends React.Component {
  //   static Title = Title;
  //   static Image = Image;

  render() {
    // const { children } = this.props;

    return (
      <div>
        <footer>
          <div className="container text-center text-white">
            <div className="row">
              <div className="col">
                <p>Authorify &copy; 2018 - All Rights Reserved</p>
                <ul>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
