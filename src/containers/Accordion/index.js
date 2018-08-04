import React from "react";
import config from "./config";

export default () => (
    <div className="col col-md-4">
        <div className="accordion" id="accordionCoverPageEditor">
            {config.map(accordian => {
                return (
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <button
                                className="btn btn-link"
                                type="button"
                                data-toggle="collapse"
                                data-target={"#" + accordian.id}
                                aria-expanded="true"
                                aria-controls="bookCover"
                            >
                                {accordian.id}
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
                            id={accordian.id}
                            className="collapse"
                            aria-labelledby="headingOne"
                            data-parent="#accordionCoverPageEditor"
                        >
                            <div className="card-body accordion_scrollbar">
                                <div className="book_cover_wrap text-center">
                                    <div className="row">
                                        {accordian.templates.map(template => (
                                            <div className="col-6">
                                                <div className="img_wrap active">
                                                    <img src="assets/images/dummy-cover-photo.png" />
                                                    <div className="icon_tick">
                                                        <i className="fas fa-check" />
                                                    </div>
                                                </div>
                                                <h6>{template.id}</h6>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);
