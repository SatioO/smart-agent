import React from 'react';

export default () => (
  <header>
    <nav className="navbar navbar-expand-lg p-0 no-gutters">
      <div className="col">
        <div className="logo_wrap">
          <a className="navbar-brand" href="#">
            <image src="assets/images/logo_white_small.png" alt="logo" />
          </a>
        </div>
        <div className="search_wrap">
          <form className="form-inline">
            <input
              className="form-control"
              type="search"
              placeholder="Search drafts, books, account etc."
              aria-label="Search"
            />
            <div className="search_icon">
              <i className="fas fa-search" />
            </div>
          </form>
        </div>
        <div className="navbar_wrap">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Your Books{' '}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Book 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Book 2
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Subscriptions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Company
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="user_wrap d-flex justify-content-end">
          <div className="dropdown">
            <div className="dropdown-toggle" data-toggle="dropdown">
              <div className="user_inner">
                <img src="assets/images/dummy-user.png" alt="" />{' '}
                <span>Emiley</span>
              </div>
              <div className="icon_down">
                <i className="fas fa-chevron-down" />
              </div>
            </div>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Link 1
              </a>
              <a className="dropdown-item" href="#">
                Link 2
              </a>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
);
