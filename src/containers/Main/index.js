import React from 'react';

export default () => (
  <main>
    <div className="inner_content">
      <section className="cover_page_editor_wrap">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcrumb_wrap">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-transparent pl-0 pt-1 pb-1 mb-2">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Wizard</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Book Cover Editor
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="title_wrap pb-2">
                <h1>Book Cover Editor</h1>
              </div>
              <div className="cover_page_editor_inner border bg-white">
                <div className="row no-gutters">
                  <div className="col col-md-4">
                    <div className="accordion" id="accordionCoverPageEditor">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#bookCover"
                            aria-expanded="true"
                            aria-controls="bookCover"
                          >
                            Book Cover
                            <div className="accordion_icon">
                              <span className="minus_icon">
                                <i className="fas fa-minus" />
                              </span>
                              <span className="plus_icon">
                                <i className="fas fa-plus" />
                              </span>
                            </div>
                          </button>
                        </div>
                        <div
                          id="bookCover"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionCoverPageEditor"
                        >
                          <div className="card-body accordion_scrollbar">
                            <div className="book_cover_wrap text-center">
                              <div className="row">
                                <div className="col-6">
                                  <div className="img_wrap active">
                                    <img src="assets/images/dummy-cover-photo.png" />
                                    <div className="icon_tick">
                                      <i className="fas fa-check" />
                                    </div>
                                  </div>
                                  <h6>Template 1</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#profilePhoto"
                            aria-expanded="false"
                            aria-controls="profilePhoto"
                          >
                            Profile Photo
                            <div className="accordion_icon">
                              <span className="minus_icon">
                                <i className="fas fa-minus" />
                              </span>
                              <span className="plus_icon">
                                <i className="fas fa-plus" />
                              </span>
                            </div>
                          </button>
                        </div>
                        <div
                          id="profilePhoto"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionCoverPageEditor"
                        >
                          <div className="card-body accordion_scrollbar">
                            <div className="profile_photo_wrap">
                              <h6>Change Profile Photo:</h6>
                              <div className="upload_wrap pb-4">
                                <div className="row no-gutters">
                                  <div className="col-3">
                                    <div className="img">
                                      <img
                                        src="assets/images/profile-photo.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-9">
                                    <div className="right_wrap">
                                      <p>
                                        Select profile photo from your computer
                                        or select photo from your Facebook
                                        account.
                                      </p>
                                      <div className="upload-btn-wrapper">
                                        <button className="btn">
                                          Select Profile Photo
                                        </button>
                                        <input type="file" name="myfile" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <h6>Select from your recent uploads:</h6>
                              <div className="profile_photo_carousel">
                                <div>
                                  <img
                                    src="assets/images/profile-photo.png"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <img
                                    src="assets/images/profile-photo.png"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <img
                                    src="assets/images/profile-photo.png"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <img
                                    src="assets/images/profile-photo.png"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <img
                                    src="assets/images/profile-photo.png"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <img
                                    src="assets/images/profile-photo.png"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <img
                                    src="assets/images/profile-photo.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#contactDetails"
                            aria-expanded="false"
                            aria-controls="contactDetails"
                          >
                            Contact Details
                            <div className="accordion_icon">
                              <span className="minus_icon">
                                <i className="fas fa-minus" />
                              </span>
                              <span className="plus_icon">
                                <i className="fas fa-plus" />
                              </span>
                            </div>
                          </button>
                        </div>
                        <div
                          id="contactDetails"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionCoverPageEditor"
                        >
                          <div className="card-body accordion_scrollbar">
                            <div className="contact_details_wrap">
                              <form>
                                <div className="form-row">
                                  <div className="col">
                                    <label for="fullname">Full name:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="fullname"
                                      placeholder=""
                                      value=""
                                    />
                                  </div>
                                </div>
                                <div className="form-row">
                                  <div className="col">
                                    <label for="email">E Mail:</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="email"
                                      placeholder=""
                                      value=""
                                    />
                                  </div>
                                </div>
                                <div className="form-row">
                                  <div className="col">
                                    <label for="phonenumber">
                                      Phone Number:
                                    </label>
                                    <input
                                      type="phonenumber"
                                      className="form-control"
                                      id="text"
                                      placeholder=""
                                      value=""
                                    />
                                  </div>
                                </div>
                                <div className="form-row">
                                  <div className="col">
                                    <label for="address">Address:</label>
                                    <input
                                      type="text"
                                      className="form-control mb-2"
                                      id="address_1"
                                      placeholder="."
                                      value=""
                                    />
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="address_2"
                                      placeholder=""
                                      value=""
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingFour">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#bookDetails"
                            aria-expanded="false"
                            aria-controls="bookDetails"
                          >
                            Book Details
                            <div className="accordion_icon">
                              <span className="minus_icon">
                                <i className="fas fa-minus" />
                              </span>
                              <span className="plus_icon">
                                <i className="fas fa-plus" />
                              </span>
                            </div>
                          </button>
                        </div>
                        <div
                          id="bookDetails"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordionCoverPageEditor"
                        >
                          <div className="card-body accordion_scrollbar">
                            <div className="book_details_wrap">
                              <form>
                                <div className="form-row">
                                  <div className="col">
                                    <label for="booktitle">
                                      Book Title Suggetions:
                                    </label>
                                    <div className="form-check">
                                      <label className="form-check-label">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          name="optradio"
                                        />Selling Secrets
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <label className="form-check-label">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          name="optradio"
                                        />How to sell home efficiently
                                      </label>
                                    </div>
                                    <div className="form-check">
                                      <label className="form-check-label">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          name="optradio"
                                        />Learn to sell home
                                      </label>
                                    </div>
                                    <div className="form-check ">
                                      <label className="form-check-label">
                                        <input
                                          type="radio"
                                          className="form-check-input"
                                          name="optradio"
                                        >
                                          <input
                                            type="textbox"
                                            maxlength="15"
                                            placeholder="Enter custom title"
                                            className="form-control"
                                          />
                                        </input>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-row">
                                  <div className="col">
                                    <label for="phonenumber">
                                      Enter Book Description:
                                    </label>
                                    <textarea
                                      className="form-control"
                                      rows="3"
                                      height="10"
                                      width="30"
                                      id="comment"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                                <div className="form-row">
                                  <div className="col">
                                    <label for="phonenumber">
                                      Enter Short Bio:
                                    </label>
                                    <textarea
                                      className="form-control"
                                      rows="3"
                                      height="10"
                                      width="30"
                                      id="comment"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-8">
                    <div className="cover_story_section">
                      <div className="img_wrap mb-3">
                        <img src="assets/images/dummy-cover-photo.png" />
                      </div>
                      <div className="d-flex justify-content-center">
                        <div className="icons_wrap border text-center">
                          <ul className="row no-gutters">
                            <li className="col-3">
                              <div className="icon_inner">
                                <i className="fas fa-arrows-alt" />
                              </div>
                            </li>
                            <li className="col-9">
                              <div className="zoom_wrap">
                                <div className="row no-gutters">
                                  <div className="col">
                                    <div className="zoom_out icon_inner">
                                      <i className="fas fa-search-minus" />
                                    </div>
                                  </div>
                                  <div className="col-5">
                                    <div className="zoom_input">
                                      <div className="input-group">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="100%"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="zoom_in icon_inner">
                                      <i className="fas fa-search-plus" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end pt-4 pb-4">
                <div className="btn_wrap">
                  <a href="#" className="btn btn-primary mr-2">
                    {' '}
                    <i className="fas fa-chevron-left" /> <span>Back</span>
                  </a>
                  <a href="#" className="btn btn-primary">
                    <span>Next</span> <i className="fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
);
