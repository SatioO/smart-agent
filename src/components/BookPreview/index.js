import React from "react";
import dummyCoverPhoto from "../../assets/images/dummy-cover-photo.png";

export default () => (
    <div className="col col-md-8">
        <div className="cover_story_section">
            <div className="img_wrap mb-3">
                <img src={dummyCoverPhoto} alt={dummyCoverPhoto} />
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
);
