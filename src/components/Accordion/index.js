import React from "react";
import config from "./config";
import BookTemplate1 from "../../assets/images/dummy-cover-photo.png";

export default () => (
    <div className="col col-md-4">
        <div className="accordion" id="accordionCoverPageEditor">
            {config.map((accordion, i) => {
                return (
                    <div className="card" key={i}>
                        <div className="card-header" id="headingOne">
                            <button
                                className="btn btn-link"
                                type="button"
                                data-toggle="collapse"
                                data-target={"#" + accordion.id}
                                aria-expanded="true"
                                aria-controls="bookCover"
                            >
                                {accordion.title}
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
                            id={accordion.id}
                            className="collapse"
                            aria-labelledby="headingOne"
                            data-parent="#accordionCoverPageEditor"
                        >
                            <div className="card-body accordion_scrollbar">
                                {/* <div className="book_cover_wrap text-center">
                                    <div className="row"> */}
                                {accordion.template && <accordion.template />}
                                {/* </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);
