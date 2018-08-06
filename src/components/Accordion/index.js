import React from "react";
import config from "./config";

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
                                        <i className="fa fa-minus" />
                                    </span>
                                    <span className="plus_icon">
                                        <i className="fa fa-plus" />
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
                                {accordion.template && <accordion.template />}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);
